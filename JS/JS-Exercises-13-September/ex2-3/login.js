function check (pocket, itemPrice){
   
        if (pocket > itemPrice) {
            return console.log ('You can buy it, you have ' +pocket+ ' in your pocket')
        }
        else (pocket < itemPrice) {
            return console.log ('You can nott buy it now because you have ' +pocket+ ' in your pocket')
        } 
    
 
}

let items = [{
    name: 'GPU',
    price: 50
} , {
    name: 'SSD',
    price: 100
}, {
    name: 'CASE',
    price: 200
}]

check (321, 200);
