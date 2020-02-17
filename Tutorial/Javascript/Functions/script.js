// FUNCTION DECLARATION
/* keyword || functionName || (parameters) similar to varaibles; 
their values is given from outside the function body*/
/*
function sayHello(){
    console.log('Hello')
}
sayHello();
*/
/*
function greet(firstName){
    console.log('Hello ' + firstName)
}
greet('Filiz');
*/

// function greet(firstName){
//   return 'HEllo ' + firstName
// }
// let val = greet('Safwan')
// console.log(val)


//FUNCTION EXPRESSION


// function greet(firstName = 'EREN'){
//   return 'HEllo ' + firstName
// }
// let val = greet('Safwan')
// console.log(val)


// const squar = function (x) {
//   return typeof x !== "number" ? x: x*x
// }

// console.log(squar(12))

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS (IIFES)

(function(x){
  console.log(x*x);
})()


function squarArr (arr) {
  let newArr = []
  arr.forEach(function(element) {
    newArr.push(element*element)
});

return newArr
}
 
squarArr([1,2,3,4])

const todo = {
  newArr : [],
  add:function(item){
    this.newArr.push(item)
  },
  edit:function(id){
    console.log(`edit todo ${id}`);
  }

}
  
todo.add('12');
todo.edit(4);
console.log(todo.newArr);


