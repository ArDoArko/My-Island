import { ISLANDS, docks, points, PEOPLE, goal, SCALE } from './campaign.mjs';
import { islandCoastline } from './archipelago-terrain.mjs';
import { VILLAGE,PATHS,estateCenter,pathClear } from './campaign-world.mjs';
import { sceneryBlocked } from './campaign-scenery.mjs';

export function drawCampaign2D(ctx,s,w,h,text) {
  const zoom=s.interior?1.8:s.boat?.65:1.3;
  ctx.fillStyle=s.interior?'#25312d':'#176475';ctx.fillRect(0,0,w,h);
  ctx.save();ctx.translate(w/2-s.p.x*zoom,h/2-s.p.z*zoom);ctx.scale(zoom,zoom);
  if(s.interior){
    ctx.fillStyle='#6f7568';ctx.fillRect(-115,-125,230,310);ctx.strokeStyle='#beb99e';ctx.lineWidth=8;ctx.strokeRect(-115,-125,230,310);
    if(s.interior==='cave'){ctx.fillStyle='#967756';ctx.fillRect(-25,-60,50,35);ctx.fillStyle=s.paper?'#30383a':'#e4d6b8';if(!s.gun)ctx.fillRect(-17,-55,34,22);}
    if(s.interior==='estate'){ctx.fillStyle='#9b7751';ctx.fillRect(-45,-105,90,25);ctx.fillStyle='#f0c561';if(!s.key&&s.guards.find(g=>g.id==='boss').hp===0)ctx.fillRect(-5,-65,10,12);}
    if(s.interior==='cellar')for(const p of PEOPLE){ctx.strokeStyle='#bac6bf';if(!s.released.includes(p.id))ctx.strokeRect(p.x-18,-112,36,80);}
  }else{
    for(const i of ISLANDS){
      coast(i,1,'#398b8b',-4*SCALE);coast(i,1,'#d9cba2');coast(i,1,i.biome==='highlands'?'#8f9882':'#759575',18*SCALE);
      for(let j=0;j<26;j++){
        const a=j*2.39996+i.x*.001,r=i.radius*(.36+(j%7)*.075),x=i.x+Math.sin(a)*r,z=i.z+Math.cos(a)*r;
        if(i.id==='home'&&(sceneryBlocked({x,z},i.id,VILLAGE)||pathClear(x,z)))continue;
        if(i.id==='fortress'&&Math.abs(x-estateCenter.x)<125&&Math.abs(z-estateCenter.z)<155)continue;
        ctx.strokeStyle='#365e49';ctx.lineWidth=5;
        for(let k=0;k<7;k++){const b=k*Math.PI*2/7;ctx.beginPath();ctx.moveTo(x,z);ctx.quadraticCurveTo(x+Math.sin(b+.25)*13,z+Math.cos(b+.25)*13,x+Math.sin(b)*25,z+Math.cos(b)*25);ctx.stroke();}
      }
      ctx.fillStyle='#fff4cc';ctx.font='18px system-ui';ctx.textAlign='center';ctx.fillText(text(i.id),i.x,i.z-i.radius*.58);
      const d=docks[i.id];ctx.strokeStyle='#a2865b';ctx.lineWidth=d.width;ctx.beginPath();ctx.moveTo(d.land.x,d.land.z);ctx.lineTo(d.end.x,d.end.z);ctx.stroke();
    }
    for(const path of PATHS){ctx.strokeStyle='#b7baa5';ctx.lineWidth=path.width;ctx.beginPath();path.points.forEach((p,j)=>j?ctx.lineTo(p.x,p.z):ctx.moveTo(p.x,p.z));ctx.stroke();}
    for(const b of VILLAGE){
      ctx.fillStyle='#304f43';ctx.fillRect(b.x-b.w/2+7,b.z-b.d/2+9,b.w,b.d);
      ctx.fillStyle=b.color;ctx.fillRect(b.x-b.w/2,b.z-b.d/2,b.w,b.d);
      ctx.fillStyle='#ab7861';ctx.fillRect(b.x-b.w/2-3,b.z-b.d/2+4,b.w+6,b.d-8);
      ctx.strokeStyle='#d4aa83';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(b.x-b.w/2,b.z);ctx.lineTo(b.x+b.w/2,b.z);ctx.stroke();
    }
    ctx.fillStyle='#e0d5b9';ctx.fillRect(estateCenter.x-80,estateCenter.z-80,160,160);ctx.fillStyle='#352e25';ctx.fillRect(estateCenter.x-20,estateCenter.z+76,40,12);
    ctx.fillStyle='#404b40';ctx.fillRect(points.cave.x-36,points.cave.z-30,72,36);
    ctx.fillStyle='#d28757';ctx.fillRect(points.pump.x-15,points.pump.z-16,30,32);
  }
  for(const g of s.guards)if(g.area===s.interior&&g.hp>0&&!s.boat&&(g.area||s.island==='fortress'))dot(g,'#d28b76',12);
  if(s.interior==='cellar')for(const p of PEOPLE)if(!s.released.includes(p.id))dot(p,'#d3dcbe',10);
  const target=goal(s).target;if(target){ctx.strokeStyle='#f5d281';ctx.lineWidth=3;ctx.beginPath();ctx.arc(target.x,target.z,20+Math.sin(s.elapsed*3)*3,0,Math.PI*2);ctx.stroke();}
  ctx.save();ctx.translate(s.p.x,s.p.z);ctx.rotate(-s.heading);
  if(s.boat){ctx.fillStyle='#efe4c9';ctx.beginPath();ctx.moveTo(-18,-32);ctx.lineTo(18,-32);ctx.lineTo(22,28);ctx.lineTo(0,50);ctx.lineTo(-22,28);ctx.closePath();ctx.fill();}
  else {ctx.fillStyle='#b6ddd3';ctx.beginPath();ctx.arc(0,0,9,0,Math.PI*2);ctx.fill();}
  ctx.strokeStyle='#fff6c7';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(0,28);ctx.stroke();ctx.restore();
  if(s.shot){ctx.strokeStyle='#ffeac5';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(s.shot.from.x,s.shot.from.z);ctx.lineTo(s.shot.to.x,s.shot.to.z);ctx.stroke();}
  ctx.restore();
  function coast(i,factor,color,inset=0){ctx.fillStyle=color;ctx.beginPath();for(let j=0;j<=96;j++){const a=j/96*Math.PI*2,r=i.radius*islandCoastline(i,a)*factor-inset,x=i.x+Math.cos(a)*r,z=i.z+Math.sin(a)*r;if(j)ctx.lineTo(x,z);else ctx.moveTo(x,z);}ctx.closePath();ctx.fill();}
  function dot(p,color,r){ctx.fillStyle=color;ctx.beginPath();ctx.arc(p.x,p.z,r,0,Math.PI*2);ctx.fill();}
}
