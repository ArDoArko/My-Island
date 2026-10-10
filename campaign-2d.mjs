import { ISLANDS, docks, points, PEOPLE, goal } from './campaign.mjs';

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
      ctx.fillStyle='#dbc596';ctx.beginPath();ctx.arc(i.x,i.z,i.radius,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#759365';ctx.beginPath();ctx.arc(i.x,i.z,i.radius*.87,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fff4cc';ctx.font='18px system-ui';ctx.textAlign='center';ctx.fillText(text(i.id),i.x,i.z-i.radius*.58);
      const d=docks[i.id];ctx.strokeStyle='#a2865b';ctx.lineWidth=24;ctx.beginPath();ctx.moveTo(d.shore.x,d.shore.z);ctx.lineTo(d.x,d.z);ctx.stroke();
    }
    ctx.fillStyle='#e0d5b9';ctx.fillRect(1820,470,160,160);ctx.fillStyle='#352e25';ctx.fillRect(1880,626,40,12);
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
  function dot(p,color,r){ctx.fillStyle=color;ctx.beginPath();ctx.arc(p.x,p.z,r,0,Math.PI*2);ctx.fill();}
}
