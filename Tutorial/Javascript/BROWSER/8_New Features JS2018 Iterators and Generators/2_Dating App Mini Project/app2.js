const http = new EasyHTTP

//get users
http.get('https://api.github.com/users')
.then(val => {
    let tasks = [];

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }

    for (item of val) {
        tasks.push(item);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
})
.catch(er => console.log(er))


let tasks = JSON.parse(localStorage.getItem('tasks'));

const profiles = profileIterator(tasks)
//Call the first profile

//Next Event
document.getElementById('next').addEventListener('click', nextProfile)

//Event Handler : display the next profile
function nextProfile(e) {
  
    const currentProfile =  profiles.next().value
    if(currentProfile !== undefined) {
        document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.login}</li>
        <li class="list-group-item">Id: ${currentProfile.id}</li>
    </ul>`
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.avatar_url}" height="220" width="220">`} else {
        //no more profiles
        window.location.reload()
    }
}





//Profile Iterator
function profileIterator (profiles) {
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length ?
            {value : profiles[nextIndex++], done : false}:
            {done : true}
        }
    }
}








//Create Users
// const user = {
//     name : 'EREN',
//     username : 'bomberman',
//     email: 'e.1989@gmail.com'
// }

//Post user
// http.post('https://jsonplaceholder.typicode.com/users', user)
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Update single User on server
// http.put('https://jsonplaceholder.typicode.com/users/1', user)
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Delete user
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(val => console.log(val))
// .catch(er => console.log(er))


// http.get('https://api.github.com/users')
// .then(val => {
//     const output = document.getElementById('output')
//     val.forEach(item => {
//         let img = document.createElement('img')
//         img.src = item.avatar_url
//         output.appendChild(img)
        
//         let p = document.createElement('p')
//         p.innerHTML = `Name is: ${item.login}, id is ${item.id}`
//         output.appendChild(p)
//     });
// })
// .catch(er => console.log(er))
// .catch(er => console.log(er))

