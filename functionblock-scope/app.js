//var,let,const
//let,const - blocked scope {} anything within {}
//var - function scope

//global scope

// var amount = 100;

// function greet() {
//   //local scope
//   var random = 'some random value';
//   console.log(`hello there ${amount} ${random}`);
// }
// //console.log(random);
// greet();

// var total = 1000;
// var test = true;

// if (test) {
//   var total = 'oranges and onions';
//   console.log(`hello there`);
// }
// console.log(total);

let total = 1000;
let test = true;

if (test) {
  //local scope
  let total = 'oranges and onions';
  let value = 'some ranom value';
  console.log(`hello there`);
}
console.log(value);
console.log(total);
