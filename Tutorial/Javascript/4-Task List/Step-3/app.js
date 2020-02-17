//Define UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//console.log(form, clearBtn, filter, taskInput);



//Load all event listeners
loadEventListeners();

// Defining the function that Load all event listeners
function loadEventListeners() {
    //DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
    //Add Task Event
    form.addEventListener('submit', addTask)
    //Remove Task Event
    taskList.addEventListener('click', removeTask)
    //Clear Tasks event
    clearBtn.addEventListener('click', clearTasks)
    //Filter tasks even
    filter.addEventListener('keyup', filterTasks)
};

//Get Tasks from LS
function getTasks(){
    let tasks;
   
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(item){
        let li = document.createElement('li')
        li.className = 'collection-item'
        li.appendChild(document.createTextNode(item))
        let a = document.createElement('a')
        a.className = 'delete-item secondary-content'
        let i = document.createElement('i')
        i.className = ' fa fa-remove'
        a.appendChild(i)
        li.appendChild(a)
        taskList.appendChild(li)
    })

}


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

    storeTaskInLocalStorage(taskInput.value)
    taskInput.value = ''
    
   
}

//Store Task
function storeTaskInLocalStorage(task) {
    
    let tasks;
    //getting the tasks Array from L.S. and checking if there is no tasks yet, define it as empty array
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    //else take it ready and assign it to tasks array
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    //push the task to it
    tasks.push(task)
    //save it back to the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
   
}


function removeTask(e) {
  //First Way: 
        //e.target.closest('.delete-item').parentElement.remove()
  //Second Way:
        //e.target.parentElement.parentElement.remove()
  //Third Way:
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove()

            //Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

//Remove from LS
// function removeTaskFromLocalStorage (taskItem) {
//     let tasks;
    
//     if(localStorage.getItem('tasks') === null) {
//         tasks = []
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'))
//     }
//     //console.log(taskItem);
//     tasks.forEach(function(item,i){
//         if (item == taskItem.textContent) {
//            // console.log(item);
//             tasks.splice(i,1)
//         }
//     })
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }

//Remove from Ls BUT add to another array in Local Storage
function removeTaskFromLocalStorage (taskItem) {
    let tasks;
    let deleteTasks;

    if(localStorage.getItem('deleteTasks') === null) {
        deleteTasks = []
    }else{
        deleteTasks = JSON.parse(localStorage.getItem('deleteTasks'))
    }

    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    
    //console.log(taskItem);
    tasks.forEach(function(item,i){
        if (item == taskItem.textContent) {
            deleteTasks.push((tasks.splice(i,1).toString()))
        }
    }) 

    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('deleteTasks', JSON.stringify(deleteTasks))
}



function clearTasks (e){
    //First Way(bad way):
        //taskList.innerHTML = ""; 
    
    //Second Way:
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)
        }
        clearLS()
}
function clearLS() {
    localStorage.clear()
}


//Filter Tasks
function filterTasks(e) { 
    let listItems = document.querySelectorAll('li')
    listItems = Array.from(listItems)
    listItems.forEach(function(item){
        item.style.display = (item.textContent.toLocaleLowerCase().includes(filter.value.toLocaleLowerCase())? 'block':'none')
    })
}
