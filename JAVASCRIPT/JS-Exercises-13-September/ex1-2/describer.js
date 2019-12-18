let arr1 = [1, 55, 1, 35];

function describer (array) {
   let newArr = []
    for(var i = 0; i < array.length; i++) {
     newArr.push('This number is: '+array[i].toString())

}
  return newArr
}
describer (arr1);