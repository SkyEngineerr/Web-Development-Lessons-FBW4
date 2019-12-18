//////////////////////////////////

//Create Element
const li = document.createElement('li')

//Add Class
li.className = "collection-item"
//Add Id
li.id = 'new-id'
//Add attributes
li.setAttribute('title', 'New Item')
//Create text node and append
li.appendChild(document.createTextNode('1111'))


//create new link element
const link = document.createElement('a')

//add classes
link.className = 'delete-item secondary-content'

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

//Append link into li
li.appendChild(link)


//Append li as child to ul
document.querySelector('ul.collection').appendChild(li)

console.log(li);

///////////////////////////////////

/////EXERCISE/////

let arr = ['do', 'something', 'now', 'or', 'quit!']

arr.forEach(function(item){
    
    document.querySelector('ul.collection').appendChild(document.createElement('li')).appendChild(document.createTextNode(item))

})


const list = document.querySelector('ul.collection')
console.log(list);

