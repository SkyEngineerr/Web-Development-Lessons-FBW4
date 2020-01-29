let promise = new Promise ((resolve,reject) => {

    //after 1 second job is done with result "done"
    setTimeout(() => resolve('done'), 1000)
})