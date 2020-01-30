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

 }

