//Destructurinh Assigment

//let a,b;
//[a,b] = [100, 200]

//Rest Pattern
//[a,b,c, ...x] = [100,200,300, 500, 600, 700]
//console.log(a,b,c,x);

//({a,b} = {a:100, b:200})
//({a,b, ...c} = {a:100, b:200, c:300, d:400, e:500})
//console.log(a,b,c);

//Array Destructuring 
// const people = ['John', 'Jay', 'jILL']
// const [person1, person2, person3] = people

//Parse array returned from function
// function getPeople(){
//     return ['John', 'Jay', 'jILL']
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople()


//Object Destructuring
const person = {
    name:'john doe',
    age:32,
    city: 'miami',
    gender: 'male',
    sayHello: function(){
        console.log('Hello');
    }
}

//OLD ES5
// const name = person.name
// const age = person.age
// const city = person.city


//New ES6 Destructuring
const {name,age,city, sayHello} = person
console.log(name,age,city, sayHello);