//set local storage item
//the key and value should be string
// localStorage.setItem('name', 'Eren')
// localStorage.setItem('name', 'Seyma')
// localStorage.setItem('age', '30')


//set session storage item
// sessionStorage.setItem('name', 'mr.smith')

//remove from local storage

//localStorage.removeItem('name')

//get property from local storage
// const x = localStorage.getItem('name')
// const y = localStorage.getItem('age')


//clear local storage
// localStorage.clear()
// console.log(x,y);

// function setItems (key, value) {
//   return localStorage.setItem(key, value)
// }

// function removeItem (item) {
//   localStorage.removeItem(item)
// }

// function clearItems () {
//   localStorage.clear()
// }

let ul = document.querySelector('.collection');


let li;
let aTag;
let iTag;

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  li = document.createElement('li')
  aTag = document.createElement('a')
  iTag = document.createElement('i')

  li.className = 'collection-item'
  li.appendChild(document.createTextNode(task))

  aTag.className ="delete-item secondary-content"
  iTag.className = "fa fa-remove"
  aTag.addEventListener('click', remove)
  
  aTag.appendChild(iTag)
  li.appendChild(aTag)
  ul.appendChild(li)
  
  localStorage.setItem('tasks', JSON.stringify(tasks));

  //alert('Task saved');

  e.preventDefault();
});

let tasks = JSON.parse(localStorage.getItem('tasks'));



tasks.forEach(function(task){
  li = document.createElement('li')
  aTag = document.createElement('a')
  iTag = document.createElement('i')

  li.className = 'collection-item'
  li.appendChild(document.createTextNode(task))

  aTag.href = "#"
  aTag.className ="delete-item secondary-content"
  iTag.className = "fa fa-remove"
  
  aTag.appendChild(iTag)
  li.appendChild(aTag)
  ul.appendChild(li)
})


function remove (e) {
  const taskk = JSON.parse(localStorage.getItem('tasks'))
  let ulList = document.querySelector(".collection");
  console.log(ulList);
  Array.from(ulList.children).forEach(function(item, i){
    if(e.target.closest('li')==item){
      taskk.splice(i,1)
      ulList.removeChild(item)
  }
  })
  localStorage.setItem('tasks', JSON.stringify(taskk))
}

let clear = document.querySelector('.clear-tasks')
clear.addEventListener('click', deneme)

function deneme (e){
  localStorage.clear()
}



