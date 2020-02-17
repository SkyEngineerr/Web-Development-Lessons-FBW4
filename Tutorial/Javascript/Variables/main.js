// SCOPE and variables
// var,
// let,
// const. -
// what is a variable ? it is a binding factor.
// While other languages have static variables, javascroipt does not!!!
//     They can be changed as we wish:
//     var (old school)
// const +
// let (new kid on the blog)
// var = local scope only in a
// function
// const /
// let = in functions as well as in a blog scope(a blog in curly brakets.)
// example:
// declare a variable with var
//var name = "Johe Don";
//console.log(name);
// declare a variable with let
//let email = "adress@domain.suffix";
//console.log(email);
//re assign it
//name = 'Safwan'
// email = 'safwan@gmail.com'
// console.log(name, email);
// var G & L scope
// function show() {
//     var nun = 5;
//     console.log(nun);
// }
// var nun = 9
// show();
// console.log(nun); {
//     var num = 7
//     console.log(num);
// }
// console.log(num);
// let and const G & L Scope
// function print() {
//     let number = 107;
//     console.log(number)
// } {
//     let number = 123;
//     console.log(number)
// }
// let number = 109;
// console.log(number);
// print();
//init - declaring a varibale without giving it value
// this is allowed only using var or let
// var somThing;
// console.log(typeof somThing);
// varibale Name can consist of numbers , ,latters, _ $
//Can not start with Numbers
// let Name1 = 'Olli';
//recommended camleCase names
// let firstName = 'Ali';
// let secoundName = 'Stefn';
// let fullName = firstName + secoundName;
// console.log(fullName);
//const
const name = 'Johe'
console.log(name);
//can't reAssign a new value
//name = 'steve';
//can't init
//const someThing;
//exceptions to const
//objects and Arrays can be mutated
//object example :
const person = {
    name: 'Ray',
    age: 23
}
person.name = 'Jay';
person.age = 25;
console.log(person);
//But not like below ;
// person = {
// name: 'Ray',
//     age: 23
// }
const arr = [1, 2, 3, 4, 5]
arr.push('added Value')
console.log(arr);
arr[3] = 'changed Value'
console.log(arr);
//but Not
//arr = [44,55]


function greeting (greetWord, name) {

    return `${greetWord} ${name}`
  }
  
  const greetingMe = greeting ('Hi', 'Me')
  
  console.log(greetingMe)


  function findPhrase (text, phrase) {
    let newArr = text.split(" ")
    let newArr2 = [];
   
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] == 'rabit') {
        newArr2.push(newArr[i])
      }
    }

    console.log(`Rabit repeats ${newArr2.length} times in the text`)
}

let text1= 'The rabit was jumpin rabit all the time'
const num = findPhrase(text1, 'rabit')