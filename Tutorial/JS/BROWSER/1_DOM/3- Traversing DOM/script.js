let val;
const list = document.querySelector('ul.collection')

const listItem = document.querySelector('li.collection-item:first-child');

console.log(listItem);
val = list;
//console.log(val);
val = listItem
//console.log(val);

//Get Child -Nodes-
val = list.childNodes
let val2 = Array.from(val)
// val = list.childNodes[0]
// val = list.childNodes[0].nodeName
//val = list.childNodes[0].nodeType
//console.log(val)


  // val2.forEach(function(item){
  
  //   if(item.innerText == 'Hello'){
  //     item.style.color = 'red'
  //   }
  // })

// 1=Element
// 2=Attribute
// 3=Text node
// 8=Comment
// 9=Document itself
// 10=Doctype


val = list.children;
val = val[0].className
val = list.children[1].innerText
//console.log(val);

list.children[0].children[0].id = 'test-link'
//console.log(list.children[0].children[0].children[0]);

//First Child

val = list.firstChild;
val = list.firstElementChild;
val = list.firstElementChild.innerText
val = list.lastElementChild.innerText
val = list.children.length // same: list.childElementCount


//Get parent node
val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement


////

// val = list.children
// val = Array.from(val)
// console.log(val);

// val.forEach(function(item){
//   console.log(item);
//   console.log(item.style.color );
//   if(item.style.color == 'red') {
//     item.innerText = 'DONE'
//   }
// })

// let count =0;
// val.forEach(function(item,index){
  

// if(item.innerText == 'DONE') {
//     count += 1
//   }
// })

// console.log(count);


//get next sibling
val = listItem.nextSibling
val = listItem.nextElementSibling
console.log(val);

//get prev sibling
val = listItem.previousSibling
val = listItem.previousElementSibling
console.log(val);