const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')


//CLEAR INPUT
taskInput.value = ''

//Submit
form.addEventListener('submit', runEvent)

//Keydown
//taskInput.addEventListener('keydown', runEvent)

//Keypress
//taskInput.addEventListener('keypress', runEvent)

//Focus
//taskInput.addEventListener('focus', runEvent)

//Blur
//taskInput.addEventListener('blur', runEvent)

//change
Selection.addEventListener('change', runEvent)

// *** EVENT HANDLER *** //
function runEvent (e) {
  
  console.log(`EVENT TYPE: ${e.type} value ${e.target.value}`);
  heading.innerText = e.target.value
 
}
