/*
Async/await: Special syntax to work with promises in a more comfortable fashion
*/


//The word 'async' before a function
//this means a function always returns a promise
//values are wrapped in a resolved promise automatically
//Doesn't work with arrow functions

async function sampleFunc() {
    //return Promise.resolve('Hello February') Async sayesinde bu satiri yazmamiza gerek kalmadi. 
    return "Hello February"
}

head.innerHTML =  sampleFunc().then(val => head.innerHTML = val)
//So, async 'ensures' that the function returns a promise and 'wraps' it's returned value into the resolved value.


//Await:

//The keyword await makes JavaScript wait until that promise settles and returns its result.

async function myTest () {
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => resolve ('done!'), 1000)
    })
    let result = await promise;
    alert(result)
}

myTest ()