function easyHTTP () {
    this.http = new XMLHttpRequest()
}


//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback, error) {
    this.http.open('GET', url, true)
    this.http.onload = () => {
        if(this.http.status === 200) {
            //console.log(this.http.responseText);
            callback(this.http.responseText) 
        } else {
            error('Page not found')
        }
    }
    this.http.send()
}
//Make an HTTP POST Request
//Make an HTTP PUT Request
//Make an HTTP DELETE Request