document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    e.preventDefault()
    createLi()
})

function createLi(){
    let ul = document.querySelector('.collection').children
    //console.log(Array.from(ul.children))
    if(ul.length>0){
    Array.from(ul).forEach(function(item){
        item.remove()
    })
}

const tasks = JSON.parse(localStorage.getItem('tasks'));
if(tasks != null){
for(j=0; j<tasks.length; j++){
    console.log(tasks[j])
let li = document.createElement('li');
let a = document.createElement('a')
a.className='delete-item secondary-content'
let i = document.createElement('i')
i.className = 'fa fa-remove'
li.appendChild(a)
a.appendChild(i)
a.addEventListener('click', removing)
li.className = 'collection-item'
li.appendChild(document.createTextNode(tasks[j]))
document.querySelector('ul.collection').appendChild(li)
}
}}

function removing(e){
    const taskk = JSON.parse(localStorage.getItem('tasks'))
    let ul = document.querySelector('.collection')
    console.log(Array.from(ul.children))
    Array.from(ul.children).forEach(function(item, i){
        if(e.target.closest('li')==item){
            taskk.splice(i,1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(taskk))
    createLi()
}
