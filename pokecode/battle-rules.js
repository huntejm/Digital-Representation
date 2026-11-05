export const moveSets=[
[{name:'Tackle',type:'Normal',power:24,pp:20},{name:'Vine Whip',type:'Grass',power:34,pp:10},{name:'Razor Leaf',type:'Grass',power:42,pp:6}],
[{name:'Scratch',type:'Normal',power:24,pp:20},{name:'Ember',type:'Fire',power:34,pp:10},{name:'Flame Burst',type:'Fire',power:42,pp:6}],
[{name:'Tackle',type:'Normal',power:24,pp:20},{name:'Water Gun',type:'Water',power:34,pp:10},{name:'Bubble Beam',type:'Water',power:42,pp:6}],
[{name:'Quick Attack',type:'Normal',power:24,pp:20},{name:'Thunder Shock',type:'Electric',power:34,pp:10},{name:'Electro Ball',type:'Electric',power:42,pp:6}],
[{name:'Pound',type:'Normal',power:24,pp:20},{name:'Disarming Voice',type:'Fairy',power:34,pp:10},{name:'Body Slam',type:'Normal',power:42,pp:6}],
[{name:'Quick Attack',type:'Normal',power:24,pp:20},{name:'Bite',type:'Dark',power:34,pp:10},{name:'Swift',type:'Normal',power:42,pp:6}],
[{name:'Tackle',type:'Normal',power:24,pp:20},{name:'Headbutt',type:'Normal',power:34,pp:10},{name:'Body Slam',type:'Normal',power:42,pp:6}],
[{name:'Lick',type:'Ghost',power:24,pp:20},{name:'Shadow Punch',type:'Ghost',power:34,pp:10},{name:'Shadow Ball',type:'Ghost',power:42,pp:6}]
];
// Simplified classroom rules: primary types, no immunities, no random misses.
export function effectiveness(attack,defender){if(({Fire:'Grass',Water:'Fire',Grass:'Water',Electric:'Water',Fairy:'Dark',Dark:'Ghost',Ghost:'Ghost'})[attack]===defender)return 1.4;if(attack===defender&&['Fire','Water','Grass','Electric'].includes(attack))return .75;if(({Grass:'Fire',Fire:'Water',Water:'Grass'})[attack]===defender)return .75;return 1;}
export function attackResult(move,defender,hp){const multiplier=effectiveness(move.type,defender),damage=Math.round(move.power*multiplier);return {damage,hp:Math.max(0,hp-damage),multiplier};}
export function reviewOutcome(hp,correct){const lostHP=correct?0:Math.min(15,hp);return {hp:hp-lostHP,lostHP,canAttack:correct,knockedOut:hp-lostHP===0};}
