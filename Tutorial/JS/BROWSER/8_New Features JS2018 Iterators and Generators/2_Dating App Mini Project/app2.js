const http = new EasyHTTP
let counter = 1;
let proxy = 'https://cors-anywhere.herokuapp.com/'
http.get(proxy+'https://api.github.com/users/'+counter)
.then(function(data){
    if(response.status === 200) {
        console.log(data);
    }
})