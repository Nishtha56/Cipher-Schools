const add = (a, b) => a + b;

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

let result = add(num1, num2);
alert("The sum is: " + result);