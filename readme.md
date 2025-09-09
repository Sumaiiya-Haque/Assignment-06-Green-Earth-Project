1) What is the difference between var, let, and const?

ans:The scope of a var variable is functional or global scope.
The scope of alet variable is block scope.
The scope of a const variable is block scope.

Var can be updated and re-declared in the same scope.
let can be updated but cannot be re-declared in the same scope.
const can neither be updated or re-declared in any scope.

Var can be declared without initialization.
let can be declared without initialization.
const cannot be declared without initialization.

2) What is the difference between map(), forEach(), and filter()?
Ans:.forEach:
.forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.
Example:
In the example below we would use .forEach() to iterate over an array of food and log that we would want to eat each of them.
let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){ console.log('I want to eat '+foodItem);
});

map():
.map() executes the same code on every element in an array and returns a new array with the updated elements.

Example:
In the example below we would use .map to iterate over the elements of the cost array and divide each element by 10, then assign our new array containing the new cost to the variable newCost.

let cost = [100,400,300,700];
let newCost = cost.map(function(costItem){ return costItem / 10;
});
console.log(newCost);


.filter():
.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

Example:
In the example below we would use .filter to return values that are less than 200.

let cost = [100,400,50,40,700];
let smallCost = cost.filter(function(costItem){ return costItem < 200
});
console.log(smallCost);

3) What are arrow functions in ES6?

Ans:Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

Arrow functions do not have the prototype property like this, arguments, or super.
Arrow functions cannot be used with the new keyword.
Arrow functions cannot be used as constructors.
Syntax:
For Single Argument:

let function_name = argument1 => expression
For Multiple Arguments:

let function_name = (argument1, argument2 , ...) => expression


4) How does destructuring assignment work in ES6?

Ans: How Destructuring works:
Array Destructuring: It lets you easily grab values from an array and assign them to variables, instead of using the array's index.
Object Destructuring: This helps you pick properties from an object and store them in variables, making your code easier to read and understand.
Default Values: You can set a backup value for variables while destructuring. If something is missing or undefined, the default will be used instead.
Skipping Items: In arrays, you can choose to ignore certain values while destructuring, focusing only on the ones you need.
Nested Destructuring: It helps you pull values from objects or arrays within other objects or arrays, all in one go, making the code shorter and more efficient.
Now let's see each one in detail

Destructuring Arrays
Array destructuring allows you to extract values from an array and assign them to variables without needing to use the array’s index.

const fruits = ['apple', 'banana', 'cherry'];
const [first, second] = fruits;
console.log(first);  
console.log(second);

Output
apple
banana


5) Explain template literals in ES6. How are they different from string concatenation?

Ans:Template literals are enclosed by backticks (`) rather than single or double quotes. They provide an easy way to include variables, write multiline strings, and even process strings using functions. Template literals enhance readability and reduce the complexity of concatenating strings with variables.

Template Literals:
Syntax :Uses backticks ( ) to define the string.
Variable: interpolation	Variables and expressions are embedded directly inside the string with ${}.
Multi-line support:	Supports multi-line strings simply by including line breaks within the backticks. 
Readability:The code is generally cleaner and more readable, as the string structure is apparent.

String Concatenation: must be broken out of the string and joined back together with the + operator.
Syntax:Uses single quotes (' '), double quotes (" "), and the plus (+) operator to join them.
Variable: This is also known as string interpolation.
Multi-line support:The whitespace is preserved.	Requires the \n escape character and + operators to achieve line breaks, which can quickly become difficult to read.
Readability:Can become cumbersome and difficult to read, especially with many variables or long strings.