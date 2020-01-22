document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes (e) {
    
    const number = document.getElementById('input[type="number').value

    const xhr = new XMLHttpRequest

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)


    xhr.onload = function () {
        if(this.status === 200) {
            let response = JSON.parse(this.responseText)
            let output = ''
            response.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>`;
            })
            document.querySelector('.jokes').innerHTML = output;
            //console.log(this.response)
            //console.log(response.value[0]) 
            //console.log(response.value[0].id)
            //console.log(response.value)// only an ARRAY of OBJECTS

        }
    }

    xhr.send()
    
    e.preventDefault()
    
}

