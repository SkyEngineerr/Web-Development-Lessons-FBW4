const posts = [{
    title: "Post one",
    body: 'This is amazing post one'
},
{
    title: "Post two",
    body: 'This is amazing post two'
}]


//Syncronized Callback Function
// function createPost (post) {
//     setTimeout(function(){
//         posts.push(post);
//     },1000)
// }


// function getPosts(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(item){
//             output += `<li>${item.body}</li>`
//         })
//         document.body.innerHTML = output
//     }, 3000)
// }

// let p1 = {title: "Post three",
// body: 'This is amazing post three'}

// createPost(p1)
// getPosts();


//Callback Functipn
function createPost (post, callback) {
    setTimeout(function(){
        posts.push(post);
        callback()
    },2000)
}


function getPosts(){
    setTimeout(function(){
        let output = ''
        posts.forEach(function(item){
            output += `<li>${item.body}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

let p1 = {title: "Post three",
body: 'This is amazing post three'}

createPost(p1, getPosts)
//getPosts();