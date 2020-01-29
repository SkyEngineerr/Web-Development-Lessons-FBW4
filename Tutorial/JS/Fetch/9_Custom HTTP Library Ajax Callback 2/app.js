const http = new easyHTTP;
function callback (err, posts) {
    if(err) {
       console.log(err); 
       const div = document.createElement('div')
       div.appendChild(document.createTextNode(err))
       document.body.appendChild(div)

    }
    else {
        let p;
        posts = JSON.parse(posts)
        let arr = Object.entries(posts)
        console.log(arr);
        arr.forEach(element => {
            p = document.createElement('p');
            p.innerHTML = element
            document.body.appendChild(p)
        });
    }
}


//Get Posts
//http.get("https://jsonplaceholder.typicode.com/posts", callback)

//Get Post
//http.get("https://jsonplaceholder.typicode.com/posts/1", callback)

//Create Post
const data = {
    title: 'custom title',
    body: 'custom body'
}

//Send Post
//http.post("https://jsonplaceholder.typicode.com/posts", data, callback)

//Update Post
//http.put("https://jsonplaceholder.typicode.com/posts/1",data,callback)

//Delete the post
http.delete("https://jsonplaceholder.typicode.com/posts/5", callback)


