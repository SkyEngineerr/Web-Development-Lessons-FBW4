//REPLACE ELEMENT
//Create Element

const newHeading = document.createElement("h2");;

//Add id
newHeading.id = "task-title";

//New text node
newHeading.appendChild(document.createTextNode("Easy Busy"))

//Get the old heading
const oldHeading = document.getElementById('task-title')

//Parent
const cardAction = document.querySelector(".card-action")  //Same down
const parentElement = oldHeading.parentElement // Same above

//Replace
cardAction.replaceChild(newHeading, oldHeading)

//Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelectorAll("ul")
// lis[0].remove();

// const li2 = list.children[0]
// list.removeChild(li2)
// console.log(lis);


//ATTRIBUTES
val = link.getAttribute('href')
  link.setAttribute('href', 'http://google.com')
  val = link
console.log(val);

///EXERCISE REPLACE TEXT INNER LI LIST///
// const firstText = document.querySelector('li').childNodes[0]

// const li = document.querySelector('.collection-item')

// let text = document.createTextNode('CHANGED ')

// li.replaceChild(text, firstText)
/////////////////////////////////////////


///EXERCISE 2//////////////////////
let texts = document.querySelectorAll('li')

texts.forEach(function(item){
   console.log(item.firstChild);
    if(item.innerText == "DONE") {
      item.remove()
    }
})




/*const div = document.body.appendChild(document.createElement('div'));
div.style.width = '200px';
h2 = div.appendChild(document.createElement('h2'));
console.log(h2)
const h2 = document.body.appendChild(document.createElement('h2'));
h2.appendChild(document.createTextNode('HelvetiList'));
h2.style.fontFamily = 'Helvetica, Verdana, sans-serif'
h2.style.fontSize = '40px'
h2.style.margin = 0;
h2.style.padding = 0;
const li1 = document.body.appendChild(document.createElement('li'));
li1.appendChild(document.createTextNode('Zurich'));
li1.style.borderBottom = '1px solid #ccc';
const li2 = document.body.appendChild(document.createElement('li'));
li2.appendChild(document.createTextNode('Geneva'));
li2.style.borderBottom = '1px solid #ccc';
const li3 = document.body.appendChild(document.createElement('li'));
li3.appendChild(document.createTextNode('Winterthur'));
li3.style.borderBottom = '1px solid #ccc';
const li4 = document.body.appendChild(document.createElement('li'));
li4.appendChild(document.createTextNode('Lausanne'));
li4.style.borderBottom = '1px solid #ccc';
const li5 = document.body.appendChild(document.createElement('li'));
li5.appendChild(document.createTextNode('Lucerne'));
li5.style.borderBottom = 'none';*/
//make the same thing but using css file and classes
// Create element
//const li  = document.createElement('li');
// Add class
//li.className = 'collection-item';
////////////////////////////
const div = document.createElement('div');
div.className = 'div';
const h2 = document.createElement('h2');
h2.className = 'h2';
h2 = div.appendChild(document.createElement('h2'));
const ul = document.createElement('ul');
///////////////////////////////////////////////////////////////////////////////
let arr = ['Hamburg', 'Pula', 'Berlin', 'Zagreb']
const div = document.createElement('div');
div.className = 'div';
const h2 = document.createElement('h2');
h2.className = 'h2';
h2.textContent = 'Cities'
div.appendChild(h2);
const ul = document.createElement('ul');
ul.className = 'ul';
arr.forEach(function(item){
    const li = document.createElement('li');
    let a = document.createElement('a')
    a.innerText = item;
    li.appendChild(a);
    li.className = 'li';
    ul.appendChild(li);
})
div.appendChild(ul)
document.body.appendChild(div);
//////////////////////////////////////////////////////////////////////////////
/*
//REPLACE ELEMENTS
//Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
//let val = document.createTextNode('Easy Peasy')
//val = document.querySelector('li').textContent
//console.log(val);
newHeading.appendChild(document.createTextNode('Task List')); //don't use innerText or textContent anymore, textNode is an object, textContent is a string
// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);
//EXERCISE REPLACE LI WITH A NEW ONE(replace text node)
const listText = document.querySelector('.collection-item').firstChild;
console.log(listText)
let newText = document.createTextNode('New Item')
let firstLi = document.querySelector('.collection-item')
//firstLi.replaceChild(newText,listText)
// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);
let listt = Array.from(document.querySelectorAll('li'));
listt.forEach(function(item) {
    console.log(item);
    if (item.innerText == 'DONE')
    item.remove();
});
*/
/////////////////////////////////////////////////////////////////
// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children)
console.log(firstLi.children[0]);
//console.log(link);
/////////////////////////////////////////////////////////////////////
/* CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
*/
/*
let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;
*/
// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);
//val = link.classList[2]
/*
const lis = document.querySelectorAll('li')
for(i = 0; i < lis.length; i++){
    if(lis[i].innerText == "DCI"){
        lis[i].children[0].setAttribute('href', 'https://digitalcareerinstitute.org/')
    }
}
console.log(lis)
*/
/////////////////////////EXCERCISE/////////////////////////////////////////
const li = Array.from(document.querySelectorAll('li'));
li.forEach(function(item) {
    //console.log(item);
    if (item.innerText == 'DONE'){
        item.firstElementChild.setAttribute('href', 'https://freecodecamp.org')
    }
})

