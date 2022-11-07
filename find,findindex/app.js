//FIND - gets specific item
//findIndex = gets index of the item
//every - every item in the array
//some - at least on item

const people = [
  { id: 1, name: 'Ajaas' },
  { id: 2, name: 'Afaan' },
  { id: 3, name: 'Talal' },
];

//FIlter rturns array
// const talal = people.filter((person) => person.name === 'Talal');
// console.log(talal);
// console.log(talal[0].name);
// console.log(talal[0].id);

//FIND - returm object
// const talal = people.find((person) => person.name === 'Talal');
// console.log(talal);

// const person = people.findIndex((item) => item.id === 3);
// console.log(person);

// const newPeople = people.slice(0, person);
// console.log(newPeople);
const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// const allGoodGrades = grades.every((grade) => grade !== 'C');
// console.log(allGoodGrades);

// const allGoodGrades = goodGrades.every((grade) => grade !== 'C');
// console.log(allGoodGrades);

// const oneBadGrade = grades.some((grade) => grade === 'C');
// console.log(oneBadGrade);

const oneBadGrade = goodGrades.some((grade) => grade === 'C');
console.log(oneBadGrade);
