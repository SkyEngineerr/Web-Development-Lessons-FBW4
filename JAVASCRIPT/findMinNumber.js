/*Write a function:
function solution(A) {  }
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [-1, -3], the function should return 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [-1,000,000..1,000,000].*/



let array = [1, 2, 3];

function checkMinNum (arr) {
  let newArr = [];
  
  for (let i=0; i <arr.length; i++) {
    if(arr[i] > 0) {
      newArr.push(arr[i])
    }
  }

  let arr2 = newArr.sort(function(a,b){return a-b})

  if (arr2 === undefined || arr2.length == 0 ) {
    return "1";
  }

  for (let i=0; i <arr2.length; i++) {
    if(!arr2.includes(arr2[i]+1)){
    console.log(arr2[i]+1);
    break;
    }
  } 
}

checkMinNum(array);