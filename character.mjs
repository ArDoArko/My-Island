export const SHIRTS=['#4c9cba','#df8168','#9974c7','#76b677','#e3b04c','#df71a7'];
export const SKINS=['#e3b185','#be895f','#efc69d','#a67152'];
export const HAIRS=['#463b32','#24282b','#99673b','#c9a465'];
export const STYLES=['Krótkie włosy','Kucyk','Kręcone włosy'];
export function appearance(value){const out={shirt:0,skin:0,hair:0,style:0};for(const [key,max] of [['shirt',6],['skin',4],['hair',4],['style',3]])if(Number.isInteger(value?.[key])&&value[key]>=0&&value[key]<max)out[key]=value[key];return out}
export function colors(value){const a=appearance(value);return {shirt:SHIRTS[a.shirt],skin:SKINS[a.skin],hair:HAIRS[a.hair],style:a.style}}
export const MOTIONS={gather:1000,fish:1500,cook:1200,wave:2000,cheer:2000};
export function motionPose(kind,phase){
  const swing=Math.sin(phase*Math.PI*4);
  if(kind==='gather')return {left:-.35,right:-1.1+swing*.6,bend:.12};
  if(kind==='fish')return {left:-.8,right:-1.3+Math.sin(phase*Math.PI)*.3,bend:0};
  if(kind==='cook')return {left:-.8,right:-.9+swing*.25,bend:.06};
  if(kind==='wave')return {left:0,right:-2.4,bend:0,wave:swing*.25};
  if(kind==='cheer')return {left:-2.4,right:-2.4,bend:0,wave:swing*.12};
  return null;
}
