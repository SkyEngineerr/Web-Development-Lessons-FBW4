//Event Bubbling
let span= document.querySelector('.card-title')
let div = document.querySelector('.card-content')

document.querySelector('.card-title').addEventListener('click', function(e){
  span.style.backgroundColor = 'red'
})

document.querySelector('.card-content').addEventListener('click', function(e){
  console.log('parent');
})

document.querySelector('.card').addEventListener('click', function(e){
  console.log('grand-parent');
})

document.querySelector('.col').addEventListener('click', function(e){
  console.log('grand grand-parent');
})

console.log(span);
console.log(div);