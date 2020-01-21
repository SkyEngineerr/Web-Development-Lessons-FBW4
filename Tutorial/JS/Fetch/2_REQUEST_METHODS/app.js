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
        const output = document.getElementById('output')
        output.innerHTML = this.responseText
        
    }

    xhr.send()
}
