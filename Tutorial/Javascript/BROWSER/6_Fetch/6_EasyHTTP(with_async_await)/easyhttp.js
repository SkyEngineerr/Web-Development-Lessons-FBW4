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

                //***ASAGIDAKI YUKARIDAKI ILE AYNI***//
        //  return new Promise((resolve, reject) => {
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        // })
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
            //****ASAGIDAKI YUKARIDAKI ILE AYNI****//
        // return new Promise((resolve,reject) => {
        //     fetch(url, {
        //         method: 'POST',
        //         headers : {
        //             'Content-type' : 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        // })
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

         //****ASAGIDAKI YUKARIDAKI ILE AYNI****//
        // return new Promise ((resolve,reject) => {
        //     fetch(url, {
        //         method:'PUT',
        //         headers : {
        //             'Content-type' : 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        // })
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

        //****ASAGIDAKI YUKARIDAKI ILE AYNI****//
        // return new Promise((resolve,reject) => {
        //     fetch(url, {
        //         method:'DELETE',
        //         headers : {
        //             'Content-type' : 'application/json'
        //         }  
        //     })
        //     .then(res => res.json())
        //     .then(() => resolve('Done'))
        //     .catch(err => reject(`My custom message.. ${err}`))
        // })
    }
 }


