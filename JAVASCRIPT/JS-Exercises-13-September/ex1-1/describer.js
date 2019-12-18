let arr1 = [1, 55,1];

function describer (array) {
  let arrNew = []
    for(var i = 0; i < array.length; i++) {
      arrNew.push('This is number: ' + array[i]);

}
return arrNew
}
describer (arr1);
console.log(arr1);