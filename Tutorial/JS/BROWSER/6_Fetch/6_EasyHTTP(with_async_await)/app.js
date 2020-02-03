const http = new EasyHTTP

//get users
// http.get('https://api.github.com/users')
// .then(val => console.log(val))
// .catch(er => console.log(er))


//Create Users
const user = {
    name : 'EREN',
    username : 'bomberman',
    email: 'e.1989@gmail.com'
}

//Post user
// http.post('https://jsonplaceholder.typicode.com/users', user)
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Update single User on server
// http.put('https://jsonplaceholder.typicode.com/users/1', user)
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(val => console.log(val))
.catch(er => console.log(er))


http.get('https://api.github.com/users')
.then(val => {
    const output = document.getElementById('output')
    val.forEach(item => {
        let img = document.createElement('img')
        img.src = item.avatar_url
        output.appendChild(img)
        
        let p = document.createElement('p')
        p.innerHTML = `Name is: ${item.login}, id is ${item.id}`
        output.appendChild(p)
    });
})
.catch(er => console.log(er))
.catch(er => console.log(er))

