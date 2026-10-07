// Shared by the solo game and the authoritative room engine. Units are the
// original world units (80 per 3D unit); clearance includes the whole boar.
export const BOAR_RADIUS = 52;
const GRID = 24, EPSILON = 1;
const routes = new WeakMap();
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

export function obstacleRadius(object) {
  if (object.t === 'rock') return 80 * Math.max(.4, .34 + .18 * Math.abs(Math.sin(object.phase || 0)));
  if (object.t === 'tree') return 16;
  return 0;
}

function segmentDistance(a, b, circle) {
  const dx = b.x - a.x, dy = b.y - a.y, length2 = dx * dx + dy * dy;
  const t = length2 ? Math.max(0, Math.min(1, ((circle.x - a.x) * dx + (circle.y - a.y) * dy) / length2)) : 0;
  return Math.hypot(a.x + t * dx - circle.x, a.y + t * dy - circle.y);
}

export function wildlifeNavigation(objects, isLand, buildings = {}) {
  const solids = [...objects.filter(o => obstacleRadius(o)).map(o => ({ x: o.x, y: o.y, radius: obstacleRadius(o) })),...(buildings.circles||[])];
  const rects=buildings.rects||[];
  const key = solids.map(o => `${o.x},${o.y},${o.radius}`).join('|')+JSON.stringify(rects);
  const hitsRect=(point,r,radius)=>Math.hypot(Math.max(0,Math.abs(point.x-r.x)-r.w/2),Math.max(0,Math.abs(point.y-r.y)-r.h/2))<radius+EPSILON;
  function segmentHitsRect(a,b,r,radius){
    let lo=0,hi=1;
    for(const [axis,size] of [['x','w'],['y','h']]){
      const half=r[size]/2+radius+EPSILON,d=b[axis]-a[axis],min=r[axis]-half,max=r[axis]+half;
      if(Math.abs(d)<1e-9){if(a[axis]<min||a[axis]>max)return false;continue}
      const one=(min-a[axis])/d,two=(max-a[axis])/d;lo=Math.max(lo,Math.min(one,two));hi=Math.min(hi,Math.max(one,two));if(lo>hi)return false;
    }
    return true;
  }
  function onLand(point) {
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4;
      if (!isLand(point.x + Math.cos(a) * BOAR_RADIUS, point.y + Math.sin(a) * BOAR_RADIUS)) return false;
    }
    return isLand(point.x, point.y);
  }
  function walkable(point) {
    return onLand(point) && solids.every(o => distance(point, o) >= o.radius + BOAR_RADIUS + EPSILON)&&rects.every(r=>!hitsRect(point,r,BOAR_RADIUS));
  }
  function clear(a, b, radius = BOAR_RADIUS) {
    if (solids.some(o => segmentDistance(a, b, o) < o.radius + radius + EPSILON)||rects.some(r=>segmentHitsRect(a,b,r,radius))) return false;
    if (!radius) return true;
    const count = Math.max(1, Math.ceil(distance(a, b) / 8));
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      if (!onLand({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })) return false;
    }
    return true;
  }
  return { solids, key, walkable, clear };
}

// Previously saved enemies can already be inside a stone. Move only the enemy
// to its nearest free ground; leave resources, inventory and spawn anchors intact.
export function releaseBoar(enemy, navigation) {
  if (navigation.walkable(enemy)) return false;
  const original = { x: enemy.x, y: enemy.y }, point = { ...original };
  for (let pass = 0; pass < 20; pass++) {
    for (const o of navigation.solids) {
      const radius = o.radius + BOAR_RADIUS + EPSILON + .1, d = distance(point, o);
      if (d < radius) {
        const a = d > .001 ? Math.atan2(point.y - o.y, point.x - o.x) : (enemy.phase || 0);
        point.x = o.x + Math.cos(a) * radius; point.y = o.y + Math.sin(a) * radius;
      }
    }
    if (navigation.walkable(point)) { enemy.x = point.x; enemy.y = point.y; routes.delete(enemy); return true; }
  }
  for (let radius = 8; radius <= 400; radius += 8) {
    for (let i = 0; i < 64; i++) {
      const a = i * Math.PI / 32, candidate = { x: original.x + Math.cos(a) * radius, y: original.y + Math.sin(a) * radius };
      if (navigation.walkable(candidate)) { enemy.x = candidate.x; enemy.y = candidate.y; routes.delete(enemy); return true; }
    }
  }
  return false;
}

class Heap {
  items = [];
  push(node) {
    let i = this.items.push(node) - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.items[parent].score <= node.score) break;
      this.items[i] = this.items[parent]; i = parent;
    }
    this.items[i] = node;
  }
  pop() {
    const first = this.items[0], last = this.items.pop();
    if (this.items.length) {
      let i = 0;
      while (i * 2 + 1 < this.items.length) {
        let child = i * 2 + 1;
        if (child + 1 < this.items.length && this.items[child + 1].score < this.items[child].score) child++;
        if (this.items[child].score >= last.score) break;
        this.items[i] = this.items[child]; i = child;
      }
      this.items[i] = last;
    }
    return first;
  }
}

function findRoute(start, destination, navigation) {
  const dx = destination.x - start.x, dy = destination.y - start.y;
  const bounds = [Math.floor((Math.min(0, dx) - 168) / GRID), Math.ceil((Math.max(0, dx) + 168) / GRID),
    Math.floor((Math.min(0, dy) - 168) / GRID), Math.ceil((Math.max(0, dy) + 168) / GRID)];
  const open = new Heap(), costs = new Map(), closed = new Set();
  const first = { x: start.x, y: start.y, gx: 0, gy: 0, cost: 0, score: distance(start, destination), parent: null };
  let best = first, finish = null;
  open.push(first); costs.set('0,0', 0);
  for (let visits = 0; open.items.length && visits < 2200; visits++) {
    const current = open.pop(), key = current.gx + ',' + current.gy;
    if (closed.has(key)) continue;
    closed.add(key);
    if (distance(current, destination) < distance(best, destination)) best = current;
    if (distance(current, destination) < GRID * 2 && navigation.clear(current, destination)) {
      finish = { ...destination, parent: current }; break;
    }
    for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) {
      if (!x && !y) continue;
      const gx = current.gx + x, gy = current.gy + y, nextKey = gx + ',' + gy;
      if (gx < bounds[0] || gx > bounds[1] || gy < bounds[2] || gy > bounds[3] || closed.has(nextKey)) continue;
      const next = { x: start.x + gx * GRID, y: start.y + gy * GRID, gx, gy, parent: current };
      const cost = current.cost + GRID * Math.hypot(x, y);
      if (cost >= (costs.get(nextKey) ?? Infinity) || !navigation.clear(current, next)) continue;
      next.cost = cost; next.score = cost + distance(next, destination); costs.set(nextKey, cost); open.push(next);
    }
  }
  const path = [];
  for (let node = finish || best; node.parent; node = node.parent) path.push({ x: node.x, y: node.y });
  return path.reverse();
}

export function moveBoar(enemy, destination, travel, navigation, now = 0) {
  releaseBoar(enemy, navigation);
  if (!(travel > 0) || !navigation.walkable(enemy)) return;
  let waypoint = destination;
  if (!navigation.clear(enemy, destination)) {
    let route = routes.get(enemy);
    if (!route || route.key !== navigation.key || distance(route.destination, destination) > 36 || now - route.at > 1000) {
      route = { key: navigation.key, destination: { ...destination }, at: now, path: findRoute(enemy, destination, navigation) };
      routes.set(enemy, route);
    }
    while (route.path.length && distance(enemy, route.path[0]) < 1) route.path.shift();
    if (!route.path.length) return;
    // Skip intermediate cells when the full body can follow a straight segment.
    for (let i = route.path.length - 1; i > 0; i--) {
      if (navigation.clear(enemy, route.path[i])) { route.path.splice(0, i); break; }
    }
    waypoint = route.path[0];
  } else routes.delete(enemy);
  const d = distance(enemy, waypoint), amount = Math.min(travel, d);
  if (!d) return;
  const next = { x: enemy.x + (waypoint.x - enemy.x) * amount / d, y: enemy.y + (waypoint.y - enemy.y) * amount / d };
  if (navigation.clear(enemy, next)) { enemy.x = next.x; enemy.y = next.y; }
}
