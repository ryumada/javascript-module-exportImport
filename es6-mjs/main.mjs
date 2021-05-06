// this code copied from Dicoding Javascript Fundamentals course
const fight = (tiger, wolf) => {
  if(tiger.strength > wolf.strength){
    return tiger.growl();
  }
  if(wolf.strength > tiger.strength){
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat ya?!';
}

import Tiger from './Tiger.mjs';
import Wolf from './Wolf.mjs';

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

console.log(result);