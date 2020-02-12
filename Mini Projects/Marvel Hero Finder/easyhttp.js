/** 
 * EasyHTTP library
 * *Library ofr making HTTP requests
 * 
 * @version 2.0.0
 * @author Eren
 * @licence MIT
 **/

 class EasyHTTP{
     //make an HTTP GET request
    async get (url){
         const response = await fetch(url)
         const resData = await response.json()
         return resData
     }

    //Make a HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        
        return resData
    }

    //Make a HTTP PUT Request
    async put(url,data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        
        return resData
    }

    //Make an HTTP DELETE requests
    async delete(url){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            }
        })
        const resData = await response.json()
        
        return resData
    }
 }


