//SPREAD OPERATOR

const arr = [1,5,6,2,3,'eren',4,1,2,9,23]

console.log(Math.max(...arr));
console.log(...arr);


//Using spread in functions
function average (...numbers) {
    let sum = 0;
    for(i = 0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    return  sum
}

let x = average(1,2,3,10,5,0)
console.log(x);

//Using spread in objects
let obj0 = {
    name:'eren',
    age: 30
}
let obj1 = {
    secondName:'Yilmaz',
    gender :'male'
}

let obj2 = {...obj0, ...obj1, nationality:"turk"}
console.log(obj2);

//Destructuring in arrays
let ar = [10, 'first string', 'second string',50]
// let firstString = ar[1]
// let secondString = ar[2]
let [ ,firstString, secondString] = ar
console.log(firstString);
console.log(secondString);


//Destructuring in objects
const ob = {firstname:'Eren', lastname:'Yilmaz', age:42}
const{firstname, age} = ob;
console.log(firstname);
console.log(age);

//Rest operators
const numbers = [1,2,3]
const[fnumber, ...rnumber] = numbers
console.log(fnumber);
console.log(rnumber);


const [allElement] = document.querySelectorAll('.bla')