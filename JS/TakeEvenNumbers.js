//Extract even numbers of array

let number = [2,4,7];
?

function giveMeEvenArray (arr1){
let arr2 = [];
arr1.forEach(function(item){
  if(item%2==0) {arr2.push(item);}
})
return arr2;
}
?
let evenNums = giveMeEvenArray(number);
console.log(evenNums);