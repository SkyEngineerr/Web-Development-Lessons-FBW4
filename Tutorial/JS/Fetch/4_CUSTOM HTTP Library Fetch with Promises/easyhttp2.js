/** 
 * EasyHTTP library
 * *Library ofr making HTTP requests
 * 
 * @version 1.0.0
 * @author Eren
 * @licence
 **/

 class EasyHTTP{
     //make an HTTP GET request
     get (url){
         return new Promise((resolve, reject) => {
             fetch(url)
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err))
         })
     }

    //Make a HTTP POST Request
    post(url, data) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make a HTTP PUT Request
    put(url,data) {
        return new Promise ((resolve,reject) => {
            fetch(url, {
                method:'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
 }

