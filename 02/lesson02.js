console.log('My name is');

console.log(' Deleon');

console.log('My name is' + 'Deleon');

//1 coffee $5 and 1 bagel $3

console.log('Total cost $' + (5 + 3));

console.log(`Total cost $${5+3}`);

alert(`Total cost $${5+3}`);






















/*When calculating money, it is a good practice to calculate in cents 
and then convert back to dollars at the end.
There are 3 ways to create a string in JS: 
1. Single Quote '...' Single Quote.
2. Double Quote "..." Double Quote.
By default, it is recommended to use single quotes; they're easy to understand/read. 
Double quotes are recommended in cases where there's a single quote inside the string already, e.g., ("I'm learning JS!"). 
You can do it with an escape character too (a backslash).
\n = newline character.
3. Backticks `...` backticks; strings created with backticks are called "template strings".
Interpolation is cleaner than concatenation.
'items (' + (1 + 1) + ')  $' + (2095 + 799) / 100' // concatenation
`items (${1 + 1}): $${(2095 + 799) / 100}` // interpolation 
Interpolation is highly recommended. */
