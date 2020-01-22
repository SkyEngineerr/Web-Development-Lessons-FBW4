// let x = JSON.parse(`{"id":0, "name":"Eren"}`)
// console.log(x);
// console.log(typeof x);
// console.log(x.id);


// let y = {
//     name: "object",
//     age:21
// }

// let z = JSON.stringify(y)
// console.log(z);
// console.log(typeof z);

// let div = document.getElementById("someDiv")
// div.innerHTML = "eren"

window.onload = function (){
    console.log("Document was loaded");
}

function showUsers() {
    let xhr = new XMLHttpRequest()
    //console.log(Object.keys(xhr));
    xhr.open("GET", "users.json", true);
    xhr.onprogress = function() {
        let p = document.createElement("p")
        p.id = "status"
        p.innerHTML = "SUPERERMAN"
        document.body.appendChild(p)
    }
    xhr.onreadystatechange = function () {
        
        switch (this.readyState) {
            case 0:
            p.innerHTML = "Request not initilazed"
            break;
            case 1:
            p.innerHTML = "server connection established"  
            break;
            case 2:
            p.innerHTML = "request received"  
            break;
            case 3:
            p.innerHTML = "processing request" 
            break; 
            case 4:
            p.innerHTML = "request finished and response is ready" 
            break; 
        }
    }
    
    xhr.send()
}

