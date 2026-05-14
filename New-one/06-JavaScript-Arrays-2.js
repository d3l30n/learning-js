/*You can put anything in an array, in JavaScript.
You even can put an array inside another array.*/

var vehicles = [
  "Ford", ["Fiesta", "Taurus", "Explorer"],
  "Honda", ["Pilot", "Civic", "Accord"],
  "Toyota", ["Corolla", "Camry", "Prius"]
];
undefined
vehicles[1][2];
'Explorer'
/* A regular variable holding a string can be treated as an array in JavaScript */
var myString = "Hello";
myString[0];
'H'