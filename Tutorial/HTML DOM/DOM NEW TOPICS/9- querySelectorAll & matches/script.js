const body = document.querySelector('body')
let elements = document.querySelectorAll('ul > li:last-child')
console.log(elements);

for (let elem of elements) {
  alert(elem.innerHTML)
}