/*Arrays comes with certain array methods, that you can do to them specifically. */

var animals = ["cat", "dog", "chicken"];
undefined
animals
(3) ['cat', 'dog', 'chicken']

animals.push('llama');
4
animals
(4) ['cat', 'dog', 'chicken', 'llama']

alert (animals[3]);

/*What if you need to remove an element from the array? */
 
animals.splice(1,1);
['dog']
animals;
(3) ['cat', 'chicken', 'llama']

//-------------//

animals.sort();
(4) ['cat', 'chicken', 'dog', 'llama']

/*There's a lot of array methods that can be used; And good places to find them are 2W3Schools and MDN Web Docs. */

//A way to find out wich are the last element of an array is to use the length property.//

animals[animals.length - 1];
"llama"

