const marvelHeros=["Thor","IronMan","SpiderMan"]
const dcHeros=["SuperMan","Flash","WonderWoman","BatMan"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);
/*[
    'Thor',
    'IronMan',
    'SpiderMan',
    [ 'SuperMan', 'Flash', 'WonderWoman', 'BatMan' ]
  ]*/

  const mix=marvelHeros.concat(dcHeros);
  console.log(marvelHeros);//[ 'Thor', 'IronMan', 'SpiderMan' ]
console.log(mix);
/*[
  'Thor',
  'IronMan',
  'SpiderMan',
  'SuperMan',
  'Flash',
  'WonderWoman',
  'BatMan'
]*/

//using spread
const all_new_heros=[...marvelHeros,...dcHeros];
console.log(all_new_heros);
/*[
  'Thor',
  'IronMan',
  'SpiderMan',
  'SuperMan',
  'Flash',
  'WonderWoman',
  'BatMan'
]
*/

//using flat() to return 1-D Array
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/


console.log(Array.isArray("Ananya"));//false
console.log(Array.from("Ananya"));
//[ 'A', 'n', 'a', 'n', 'y', 'a' ]
console.log(Array.from({name:"Ananya"}));
//[] as can't be converted to array directly
// and we need to tell from key or values

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ]
