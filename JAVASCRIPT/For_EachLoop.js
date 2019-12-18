function takeString (arr) {
  arr2= []
  arr.forEach(function (item){
    if (typeof item == 'string') {
      arr2.push(item);
    }
   
})
 return arr2;
}

let example = [2, 3, 'Eren', 'Istanbul'];

takeString(example);


function takeNumber (arr) {
  arr2= []
  arr.forEach(function (item){
    if (typeof item == 'number') {
      arr2.push(item);
    }
   
})
 return arr2;
}

let example2 = [2, 3, 'Eren', 'Istanbul'];

takeNumber(example2);

//end
