// Arrow Functions or Fat Arrow Functions
// no name, always expression,assign to a variable
// no function keyword
//this
// parameters and return statement
//no parameters

// function sayHi() {
//   console.log('hello');
// }
// sayHi();

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };
// hello('bob');

// //one parameter
// function triple(value1, value2) {
//   return value1 * value2 * 3;
// }

const sayHi = () => console.log('hello');
sayHi();

const double = (value) => value * 2;
const num = double(4);
console.log(num);

// two parameters and more than one line

const multiply = (num1, num2) => {
  const result = num1 * num2;
  //more code here
  return result;
};
const sum = multiply(4, 6);
console.log(sum);

//return object
const object = () => ({
  name: 'ajaas',
  age: 25,
});
const person = object();
console.log(person);

//arrow functions as callback functions

const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});
console.log(big);

// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => {
//   return number > 2;
// });
// console.log(big);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('You clicked me'));
