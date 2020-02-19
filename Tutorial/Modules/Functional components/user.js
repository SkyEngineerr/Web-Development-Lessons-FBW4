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

export {addPerson, deletePerson, changePerson}

let ul = document.getElementById('List')
let persons = [];

function addPerson (person) {
    
    persons.push(person)
    let li = document.createElement('li')
    li.innerHTML = person
    li.className = "listItem"
    ul.appendChild(li)
    console.log(persons);
}

function deletePerson (person) {
    console.log(persons);
  persons.forEach((element, i) => {
      if(person == element) {
          persons.splice(i, 1)
      }
  });
  let listItems = document.getElementsByClassName('listItem')
  for (let item of listItems) {
      if(person == item.innerHTML){
          item.style.display = 'none'
      }
  }
}

function changePerson (person, newPerson) {
  persons.forEach((element, i) => {
      if(person == element) {
          element = newPerson
      }
  });
  let listItems = document.getElementsByClassName('listItem')
  for (let item of listItems) {
      if(person == item.innerHTML){
          item.innerHTML = newPerson
      }
  }
  console.log(persons);
}

