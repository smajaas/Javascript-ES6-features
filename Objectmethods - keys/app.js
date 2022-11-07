//Three methods to convert objects into arrays
//Object.keys() - converts property names into array
//Object.values() - converts property values into array
//Object.entries() - converts both

const person = {
  name: 'Ajaas',
  age: 25,
  status: 'student',
};

//Object.keys()
// const keys = Object.keys(person);
// console.log(keys);

//Object.values()
// const values = Object.values(person);
// console.log(values);

//Object.entries()
const result = Object.entries(person);
//console.log(result);

//map method

const newResult = result.map((item) => {
  const [first, second] = item;
  //console.log(first, second);
  return first;
});

//console.log(newResult);

//for-of

for (const [first, second] of result) {
  //const [first, second] = item;
  console.log(first, second);
}
