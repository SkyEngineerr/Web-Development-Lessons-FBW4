let arr1 = [1, 55,14,77,990,18];

function describer (array) {
   let newArr = []
    for(var i = 0; i < array.length; i++) {
      if (array[i] % 5 == 0) {
     newArr.push('This number '+ array[i]+ ' it accept divide by 5')
}
else if (array[i] % 7 == 0) {
  newArr.push('This number '+ array[i] + ' it accept divide by 7')
}
else if (array[i] % 2 == 0) {
  newArr.push('This number '+ array[i]+ ' is even')
}
else if (array[i] % 2 == 1) {
  newArr.push('This number '+ array[i]+ ' is odd')
}
}
  return newArr
}
describer (arr1);