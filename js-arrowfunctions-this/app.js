// Arrow Functions or Fat Arrow Functions
//reg function: 'this' refers parent, left of the dot
//arrow function : refers to its current surrounding scope
// 'this' keyword

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log(this);
  setTimeout(() => {
    this.style.color = 'black';
  }, 2000);
});
