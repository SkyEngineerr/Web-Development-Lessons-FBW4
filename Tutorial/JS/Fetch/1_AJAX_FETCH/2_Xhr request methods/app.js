const button = document.getElementById('button')
button.addEventListener('click', loadData)


//Event Handler
function loadData() {
    //Create XHR Request Object
    const xhr = new  XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true)

    
    //onload method
    xhr.onload = function () {
        console.log(xhr);
        console.log(this.status);
        // HTTP Statuses
        //200: 'OK'
        //403: 'FORBIDDEN'
        //404: 'NOT FOUND'
        
            const output = document.getElementById('output')
            output.innerHTML = `<h1> ${this.responseText} </h1>`
        }  
    

    xhr.onprogress = function () {
        console.log(xhr.readyState);
        //readyState Values
        // Holds the status of the XMLHttpRequest.
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready
    }

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (this.status === 200 && this.readyState) {
            console.log(this.responseText);
        }
    }
    xhr.send()
}

