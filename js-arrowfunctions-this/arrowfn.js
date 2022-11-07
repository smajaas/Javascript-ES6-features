// Arrow Functions or Fat Arrow Functions
//reg function: 'this' refers parent, left of the dot
//arrow function : refers to its current surrounding scope
// 'this' keyword

const bob = {
  firstName: 'bob',
  lastName: 'smith',
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: 'anna',
  lastName: 'sanders',
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
anna.sayName();
