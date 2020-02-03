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

var div = document.createElement("div")

function showUsers() {
    let xhr = new XMLHttpRequest()
    //console.log(Object.keys(xhr));
    xhr.open("GET", "users.json", true);
    xhr.onprogress = function() {
        
        //p.id = "status"
        div.innerHTML = "SUPERERMAN"
        document.body.appendChild(div)
    }

    xhr.onreadystatechange = function () {
        
        switch (this.readyState) {
            
            case 1:
                div.innerHTML = "server connection established"  
                break;
            case 2:
                div.innerHTML = "request received"  
                break;
            case 3:
                div.innerHTML = "processing request" 
                break; 
            case 4:
                let response = JSON.parse(this.responseText)
                div.innerHTML = ""
                response.forEach (function (item){
                    let p = document.createElement("p")
                    p.innerHTML = `Name: ${item.name} Phone: ${item.phone} Email: ${item.email}`
                    div.appendChild(p)
                })
                console.log(response); 
                break; 
            default:
                p.innerHTML = "Request not initilazed"
                break;`1`
        }
    }

    xhr.send()
}

