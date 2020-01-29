function easyHTTP () {
    this.http = new XMLHttpRequest()
}


//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true)
    this.http.onload = () => {
        if(this.http.status === 200) {
            //console.log(this.http.responseText);
            callback(null, this.http.responseText) 
        } else {
            callback(`Page not found: ${this.http.status}`)
        }
    }
    this.http.send()
}
//Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, blabla){
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if(this.http.status === 201) {
            blabla(null, this.http.responseText)
        } else {
            blabla(`Page not found ${this.http.status}`)
        }
    }

    this.http.send(JSON.stringify(data))
}
//Make an HTTP PUT Request 
easyHTTP.prototype.put = function(url, data, blabla){
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if(this.http.status === 201) {
            blabla(null, this.http.responseText)
        } else {
            blabla(`Page not found ${this.http.status}`)
        }
    }

    this.http.send(JSON.stringify(data))
}


//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, blabla){
    this.http.open('DELETE', url, true)

    this.http.onload = () => {
        if(this.http.status === 200) {
            blabla(null, 'DELETED')
        } else {
            blabla(`Failed to delete`)
        }
    }

    this.http.send
}