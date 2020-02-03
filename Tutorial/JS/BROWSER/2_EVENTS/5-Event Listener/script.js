/*
document.querySelector('.clear-tasks')
console.log(('clear-tasks'));
document.querySelector('.clear-tasks').addEventListener('click', function(e){
console.log('Hello World');
e.preventDefault();
});
//document.querySelector('.clear-tasks').addEventListener('click', onClick);
document.querySelector('.clear-tasks').addEventListener('click', myFunc);
function myFunc(e){
  //console.log('clicked!!!')
  let val;
  val = e;
  //Event target element
  val = e.target;
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
//After clicking on CLEAR TASKS change color from black to red
  //e.target.className = 'clear-tasks btn red';
  //console.log(val)
  e.target.classList.remove('black');
  e.target.classList.add('red');
  console.log(e.target.classList)
};
//console.log(document.querySelector('clear-tasks'))
//After clicking on CLEAR TASKS change color from black to red
*/
function onClick(e){
  //console.log('Clicked');
  let val;
  val = e;
  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  // Event type
  
  
  val = e.type;
  console.log(val);
  // Timestamp
  val = e.timeStamp;
  
  // Coords event relative to the window
  val = e.clientY; //VERTICAL WINDOW RELATIVE
  val = e.clientX; //HORIZONTAL WINDOW RELATIVE
  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}
