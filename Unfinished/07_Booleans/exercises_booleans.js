/*const name = 'Deleon';
let hour = 13;
if (hour >= 6 && hour <= 12) {
  console.log(`Good Morning ${name}!`);
} else if (hour >= 12 && hour <= 17) {
  console.log(`Good Afternoon ${name}!`)
} else {
  console.log(`Good night ${name}.`)
} */

 /* let isHoliday = true; 
  let age = 66;

  if ((age <= 6 || age >= 65) && isHoliday == true) {
    console.log('Discount!')
  } else {
    console.log('No discount.')
  } */ 

 /*
  let coin = Math.random();
  let result = coin;
  if (coin <= 0.5){
     result = 'Heads';
  } else {
     result = 'Tails';
  } 
 
  let guess = 'Heads';

  if (guess === result) {
    console.log('You win!')
  } else {
    console.log('You lose.')
  } */


let coin = Math.random();

let result = coin <= 0.5 ? 'Heads' : 'Tails';

let guess = 'Heads';

let message = guess === result ? 'You win!' : 'You lose.';

console.log(message);