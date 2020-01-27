const posts = [{
    title: "Post one",
    body: 'This is amazing post one'
},
{
    title: "Post two",
    body: 'This is amazing post two'
}]


//Syncronized Callback Function
function createPost (post) {
    setTimeout(function(){
        posts.push(post);
    }, 2000)
}