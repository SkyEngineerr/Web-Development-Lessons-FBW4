// let number = Math.floor(Math.random() * 50)+1;

// const calculate = new Promise ((resolve, reject) => {
//     if (number < 35) {
//         resolve('Random number smaller than 35')
//     }

//     else {
//         reject(Error('Reject because Random number greater than 35'))
//     }
// })

// calculate.then(alert)

function get (url) {
    return new Promise(function (resolve, reject)) {
        let req = new XMLHttpRequest()
        req.open ('GET', url)
        
        req.onload = function(){
            if (req.status === 200) {
                resolve(req.response)
            }
            else {
                reject(Error(req.statusText))
            }
        }
    }
}



get("https://api.myjson.com/bins/11uh1e").then(function(data) {
    console.log(data);
    data = JSON.parse(data)
    data.shift()
    console.log(data);
    return data
})
.then ( function(data) {
    data.forEach(element => )
})
.catcg(error => {
    console.log('Erroe');
})







function trying () {
    this.http = new XMLHttpRequest()
}

trying.prototype.get = function (url) {
    this.http.open ('GET', url, true)
    this.http.onload = new Promise ((resolve, reject) => {
        if(this.http.status === 200) {
            resolve(this.http.responseText)
        } else {
            reject(Error('REJECTED'))
        }
    })
    this.http.send()
}

const http = new trying
http.get("https://api.myjson.com/bins/11uh1e")