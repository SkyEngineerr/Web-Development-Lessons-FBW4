//Define UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

console.log(form, clearBtn, filter, taskInput);



//Load all event listeners
loadEventListeners();

// Defining the function that Load all event listeners
function loadEventListeners() {
    //Add Task Event
    form.addEventListener('submit', addTask)
    //Remove Task Event
    taskList.addEventListener('click', removeTask)
    //Clear Tasks event
    clearBtn.addEventListener('click', clearTasks)
    //Filter tasks even
    
};


//Add Task Event Handler
function addTask(e){
    e.preventDefault();
    
    if(!taskInput.value) {
        alert('add a task')
        return
    }
    let li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(taskInput.value))
    let a = document.createElement('a')
    a.className = 'delete-item secondary-content'
    let i = document.createElement('i')
    i.className = ' fa fa-remove'
    a.appendChild(i)
    li.appendChild(a)
    taskList.appendChild(li)
    taskInput.value = ''

}