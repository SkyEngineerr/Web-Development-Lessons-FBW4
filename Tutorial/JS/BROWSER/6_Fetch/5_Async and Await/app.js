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

//await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events, etc.

async function myFunc () {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>resolve("asddasdsa"), 100)
    });
    const error = false;
    if(!error) {
        const res = await promise; //Wait until promise is resolvedr
        return res
    } else {
        await Promise.reject(new Error('Something went wrong!'))
    }
}

myFunc()
.then(val => console.log(val))
.catch(err => console.log(err))

async function getUsers () {
    //await response of the fetch call
    const response = await fetch('https://api.github.com/users')

    //Only proceed once its resolved
    const data = await response.json()

    //Only proceed proceed once the second promise is resolved
    return data
}
getUsers().then(users => console.log(users))