document.querySelector('#button1').addEventListener('click', getText)


console.log(window.fetch);
function getText() {
    fetch('local.txt').then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((responseJson) => {
        // Do something with the response
      })
      .catch((error) => {
        console.log(error)
      });
}

//Get local JSON file data

document.querySelector('#button2').addEventListener('click', getJSON)

function getJSON(){
    fetch("local.json").then(function(response){
        return response.json()
    }).then(function(data){
        const output = document.getElementById('output')
        data.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML = `Title is ${element.title} and body is ${element.body}`
            output.appendChild(li)
        });
    })
}



document.querySelector('#button3').addEventListener('click', getApi)


function getApi(){
    fetch("https://api.github.com/users").then(function(response){
        return response.json()
    }).then(function(users){
        const output = document.getElementById('output')
        users.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML = `Username: ${element.login}`
            output.appendChild(li)
        });
    })
    .catch(function(err){
        console.log(err);
    })
}
