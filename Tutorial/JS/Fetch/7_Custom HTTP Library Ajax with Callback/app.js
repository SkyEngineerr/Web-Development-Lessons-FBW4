const http = new easyHTTP;
function callback (posts) {
    console.log(posts);
}

function errFunction (err){
    console.log(err);
}

//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", callback)

