// let promise = new Promise ((resolve,reject) => {

//     //after 1 second job is done with result "done"
//     setTimeout(() => resolve('done'), 1000)
//     //setTimeout(() => reject(Error('Ohhhhh!')), 1000)
// })


// promise.then (
//     result => alert (result), //Shows 'done' after 1 sec
//     error => alert (error) //Does not run
// )
// console.log(promise);


const posts = [{
    title:'post one', body:'this is post one'
},{title:'post 2', body:'this is post 2'}]

function createPost (post) {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            posts.push(post)
            const error = false;
            if(!error) {
                resolve()
            }else{
                reject('Error : something went wrong !!!')
            }
        }, 2000)
    })
}

function getPosts () {
    setTimeout(function(){
        let output = ''
        posts.forEach(item => output += `<li> ${item.title} </li>`);
        document.body.innerHTML = output
    }, 1000)
}

createPost({
    title:'post 3', body:'this is post 3'
}).then(getPosts).catch(function(err) {
    console.log(err);
})