import { NELA, LEON, sceneSolids, releasePlayer } from './island-play.mjs';

// Shared solo/room rules. Every paid step checks location and can happen once.
export const CHAPTERS = {
  compass:{title:'Zaginiony kompas',coins:160,xp:220},
  beacons:{title:'Światła dla rozbitków',coins:200,xp:260}
};
export const FRAGMENTS = [{id:'west',x:850,y:1370,label:'Fragment przy zachodniej plaży'}, {id:'south',x:1980,y:1990,label:'Fragment przy południowej plaży'}, {id:'north',x:2810,y:830,label:'Fragment przy palmach'}];
export const RUNES = [{id:'wave',x:2250,y:1280,label:'Fala',symbol:'≈'}, {id:'palm',x:2370,y:1190,label:'Palma',symbol:'♧'}, {id:'sun',x:2490,y:1280,label:'Słońce',symbol:'☀'}];
export const SIGNALS = [{id:'west',x:610,y:1290,label:'Sygnał zachodni'}, {id:'south',x:2250,y:2030,label:'Sygnał południowy'}, {id:'north',x:3370,y:650,label:'Sygnał w zatoce'}];
export const COMPASS_CHEST = {id:'compass-chest',x:2920,y:1550,label:'Skrzynia z kompasem'};
export function freshAdventures(){return {active:null,compass:{stage:0,found:[],runes:0},beacons:{stage:0,lit:[]}}}
const int=(value,max)=>Math.max(0,Math.min(max,Math.floor(Number(value)||0)));
const ids=(value,list)=>Array.isArray(value)?[...new Set(value.filter(id=>list.some(p=>p.id===id)))]:[];
export function adventures(value){
  const s=freshAdventures();if(!value||typeof value!=='object')return s;
  s.compass.stage=int(value.compass?.stage,5);s.compass.found=ids(value.compass?.found,FRAGMENTS);s.compass.runes=int(value.compass?.runes,3);
  s.beacons.stage=int(value.beacons?.stage,3);s.beacons.lit=ids(value.beacons?.lit,SIGNALS);
  if(s.compass.stage>=2)s.compass.found=FRAGMENTS.map(p=>p.id);
  if(s.compass.stage>=3)s.compass.runes=3;
  if(s.beacons.stage>=2)s.beacons.lit=SIGNALS.map(p=>p.id);
  if(s.compass.stage<5){s.beacons.stage=0;s.beacons.lit=[];}
  if(Object.hasOwn(CHAPTERS,value.active)&&s[value.active].stage>0&&s[value.active].stage<(value.active==='compass'?5:3))s.active=value.active;
  return s;
}
// Old bases can be anywhere; a mission marker always stays on reachable ground.
export function chapterPoint(point,bank,land=()=>true){return {...point,...releasePlayer(point,sceneSolids([],bank.basePos,bank.baseLevel),p=>land(p.x,p.y))}}
export function markers(state,bank,land){
  let list=[];
  if(state.active==='compass'){
    const s=state.compass;
    if(s.stage===1)list=FRAGMENTS.filter(p=>!s.found.includes(p.id)).map(p=>({...p,type:'fragment'}));
    if(s.stage===2)list=RUNES.map((p,i)=>({...p,type:'rune',done:i<s.runes}));
    if(s.stage===3)list=[{...COMPASS_CHEST,type:'chest'}];
    if(s.stage===4)list=[{...NELA,id:'return',type:'return',label:'Nela: oddaj kompas'}];
  }
  if(state.active==='beacons'){
    if(state.beacons.stage===1)list=SIGNALS.map(p=>({...p,type:'signal',done:state.beacons.lit.includes(p.id)}));
    if(state.beacons.stage===2)list=[{...LEON,id:'return',type:'return',label:'Leon: odbierz nagrodę'}];
  }
  return list.map(p=>p.type==='return'?p:chapterPoint(p,bank,land));
}
export function objective(state){
  if(state.active==='compass')return ['','Znajdź trzy fragmenty mapy.','Dotknij znaków w kolejności: fala, palma, słońce.','Otwórz skrzynię z kompasem.','Oddaj kompas Neli.'][state.compass.stage]||'';
  if(state.active==='beacons')return state.beacons.stage===1?'Napraw trzy sygnały. Każdy: 4 drewna i 2 kamienie.':'Wróć do Leona po nagrodę.';
  return 'Wybierz wyprawę. Możesz grać solo lub z drużyną.';
}
const ok=(message,extra={})=>({ok:true,message,...extra}),fail=message=>({ok:false,message});
export function adventureAction(state,bank,person,action,land){
  if(action.mode==='start'){
    const key=action.item;if(!Object.hasOwn(CHAPTERS,key))return fail('Nieznana wyprawa.');
    if(state.active&&state.active!==key)return fail('Najpierw dokończ aktywną wyprawę.');
    if(state[key].stage===(key==='compass'?5:3))return fail('Ta wyprawa jest już ukończona.');
    if(key==='beacons'&&state.compass.stage!==5)return fail('Najpierw oddaj kompas Neli.');
    state.active=key;state[key].stage=Math.max(1,state[key].stage);return ok('Wyprawa rozpoczęta! Kierunek celu widać pod zadaniem.',{closePanel:true});
  }
  if(action.mode!=='interact'||!state.active)return fail('Wybierz wyprawę w menu PRZYGODY.');
  const targets=markers(state,bank,land),target=targets.find(p=>p.id===action.target);
  if(!target||Math.hypot(person.x-target.x,person.y-target.y)>=110)return fail('Podejdź do oznaczonego celu wyprawy.');
  const key=state.active,s=state[key];
  if(target.done)return fail('Ten punkt jest już ukończony.');
  if(key==='compass'){
    if(s.stage===1){s.found.push(target.id);if(s.found.length===3)s.stage=2;return ok('Fragment mapy znaleziony! Sprawdź kolejny cel.');}
    if(s.stage===2){
      if(target.id!==RUNES[s.runes]?.id){s.runes=0;return ok('Kolejność nie pasuje. Zacznij od fali, potem palma i słońce.');}
      s.runes++;if(s.runes===3)s.stage=3;return ok(s.stage===3?'Zagadka rozwiązana! Skrzynia z kompasem jest otwarta.':'Znak pasuje. Podejdź do następnego.');
    }
    if(s.stage===3){s.stage=4;return ok('Kompas jest w plecaku. Oddaj go Neli.');}
    if(s.stage===4){s.stage=5;state.active=null;bank.coins+=CHAPTERS[key].coins;bank.xpv+=CHAPTERS[key].xp;return ok('Kompas oddany! Nagroda odebrana. Odblokowano Światła dla rozbitków.');}
  }
  if(key==='beacons'){
    if(s.stage===1){if(bank.wood<4||bank.stone<2)return fail('Naprawa sygnału wymaga 4 drewna i 2 kamieni.');bank.wood-=4;bank.stone-=2;s.lit.push(target.id);if(s.lit.length===3)s.stage=2;return ok('Sygnał naprawiony! Światło wskazuje drogę rozbitkom.');}
    if(s.stage===2){s.stage=3;state.active=null;bank.coins+=CHAPTERS[key].coins;bank.xpv+=CHAPTERS[key].xp;return ok('Rozbitkowie są bezpieczni! Leon wypłacił nagrodę.');}
  }
  return fail('Ten punkt jest już ukończony.');
}
