//document.getElementsByClassName
//const listItems = document.querySelector('ul').getElementsByClassName('collection-item')


//const items = document.getElementsByClassName('collection-item')
//console.log(items);
//items[0].style.color= 'red'
//items[2].textContent ='Hello'


//document.getElementsByTagName('li')

// let lis =  document.getElementsByTagName('li')
// let colors = ['brown','green','orange','red','blue']
// let texts = ['brown','green','orange','red','blue']
// for (let i =0; i<lis.length; i++) {
  
//   lis[i].textContent = `The color is ${texts[i]}`
//   lis[i].style.color = colors[i]

// }

// console.log(lis);

//Convert HTML Collection into array


// lis = Array.from(lis);

// console.log(lis);

// lis.reverse();

// lis.forEach(function(item,index){
//   item.innerHTML = `<span style='color:red;'>${index} : Hello</span> `
// })

//document.querySelectorAll()
const items2 = document.querySelectorAll("li")
console.log(items2);


items2.forEach(function(item,index){
  console.log(item);
  item.style.color = 'blue'
  item.innerHTML = `<a href="https://www.linkedin.com/in/erenyilmaz123/" target="_blank">Click It</a>`
})

const liOdd= document.querySelectorAll('li:nth-child(odd)')
const liEven= document.querySelectorAll('li:nth-child(even)')

liOdd.forEach (function(li, index) {
  li.style.background= 'red'
})

liEven.forEach (function(li, index) {
  li.style.background= 'yellow'
})

console.log(liOdd)