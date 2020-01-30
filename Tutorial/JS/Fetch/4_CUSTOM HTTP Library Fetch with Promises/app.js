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
http.put('https://jsonplaceholder.typicode.com/users/1', user)
.then(val => console.log(val))
.catch(er => console.log(er))

//Delete user
http.put('https://jsonplaceholder.typicode.com/users/1', user)
.then(val => console.log(val))
.catch(er => console.log(er))



