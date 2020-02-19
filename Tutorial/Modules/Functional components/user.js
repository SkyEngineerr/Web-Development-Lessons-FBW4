//ADD EXPORT AFTER DECLARATION

// let greeting = 'welcome back'

// function hi (user) {
//     return `${greeting} ${user} in JS MODULE`
// }

// export {greeting, hi}

//ADD EXPORT BEFORE DECLARATION
// function square (num) {
//     return 'i am here for making problems'
// }
// export{square, makeElement}

// export default function sqr (num) {
//     return num*num
// }

// function makeElement (tagName, text, background) {
//     let el = document.createElement(tagName)
//     el.append(text);
//     el.style.background = background;
//     el.style.color = '#fff'
//     el.style.height = '100px'
//     document.body.append(el)
// }

export {addPerson}

let ul = document.createElement('ul')
document.body.appendChild(ul)
let newArr = [];

function addPerson (person) {
    newArr.push(person)
    let li = document.createElement('li')
    li.innerHTML = person
    ul.appendChild(li)
}

console.log(newArr);