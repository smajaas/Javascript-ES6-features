// default parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

function sayHi(person = 'Afaan') {
  console.log(`Hi ${person}`);
}
const sayHello = (person = 'Talal') => console.log(`Hello ${person}`);

sayHi();
sayHello();
