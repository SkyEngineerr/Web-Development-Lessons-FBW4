//Creat some arrays
const numbers = [43, 56, 33, 23, 36, 5];
const numbers2 = new Array(43, 56, 33, 23, 36, 5);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];
let val;
//Get array length
val = numbers.length;
//check if is array
val = Array.isArray(mixed);
//Access the array elements
val = numbers[2]
val = mixed[4];
//Edit into the Array
numbers[2] = 100;
//Find index of vaule
val = numbers.includes(33);
//Mutating Arrays
//Add on the end
numbers.push(250)
//Add on the front
numbers.unshift(4)
//Remove item from end
numbers.pop();
//remove item from front
numbers.shift();
//Splice values
val = numbers.splice(0, 1);
console.log(numbers)
console.log(val)

//Slice
val = numbers.slice(1,5)
console.log(val);

//Reverse
numbers.reverse();

//concat

val = numbers.concat(numbers2)
console.log(val);


// Sorting arrays

val = fruits.sort();

//val = numbers.sort();
console.log(val)

// Use "compare function"

val = numbers.sort(
   function(x, y){
       return x - y;
   }
);
console.log(val)

//join method
let str = 'Eren am I there Hello'
console.log(str);
let arr = str.split(' ')
arr = arr.reverse();
str = arr.join(' ')
console.log(arr);
console.log(str);

//Find
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

// function basisResult (arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 50) {
//       newArr.push(arr[i])
//     }
//   }
//   console.log(newArr)
//   return `${newArr.length} people did not pass the exam. The percentage is: % ${Math.floor((newArr.length/arr.length)*100)}`
// }

// basisResult ([78, 82, 45,20, 69, 23, 91, 55, 39, 66, 60, 100])




