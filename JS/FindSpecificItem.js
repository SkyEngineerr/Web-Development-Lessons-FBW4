/Find specific item and its index in an array

let clothing = ['shoes','shirts','socks','sweaters']
let pos = 0;

clothing.forEach(function(item, i){
 if (item == 'shirts'){
   pos = i
 }
})