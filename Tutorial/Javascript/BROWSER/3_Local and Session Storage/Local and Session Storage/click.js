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



document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});

