document.getElementById('button').addEventListener('click', getUser)
let username = document.getElementById('username')
let password = document.getElementById('password')
let exp = document.getElementById('exp')

function getUser (e) {
    const xhr = new XMLHttpRequest

    xhr.open('GET', 'users.json', true);

    xhr.onload = function () {
        if(this.status === 200) {
            let response = JSON.parse(this.responseText)
            response.forEach(function(item){
                if(item.username == username.value && item.password == password.value) {
                    const elem = document.createElement('p')
                    elem.innerHTML = `Login Successful. Your name is ${item.name} ${item.lastname}. And your age is: ${item.age}`
                    exp.appendChild(elem)
                }
                else if (item.username == username.value && item.password != password.value) {
                    const elem = document.createElement('p')
                    elem.innerHTML = `Your password is wrong`
                    exp.appendChild(elem)
                }
                else if (item.username != username.value && item.password == password.value) {
                    const elem = document.createElement('p')
                    elem.innerHTML = `Your username is wrong`
                    exp.appendChild(elem)
                }
              
            })
        }
    }

    xhr.send()

    e.preventDefault()
}