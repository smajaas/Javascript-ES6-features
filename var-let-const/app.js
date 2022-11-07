//VAR, LET, CONST
//define,update, redefine
// const cannot mutate primitive type

//define
var number = 100;
//console.log(number);
//update
number = 200;
//console.log(number);
//redefine
var number = 'orange';
//console.log(number);

let amount = 100;
//console.log(amount);
amount = 200;
//console.log(amount);
//let amount = 'orange';

const total = 100;
// console.log(total);
// total = 200;
//console.log(total);

const person = {
  name: 'bob',
};
person.name = 'john';
//person = 'bob';
console.log(person);
