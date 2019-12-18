
function lottery () {
  let luckyNumber = Math.floor(Math.random() * 100) + 1;
  let userNum= Math.floor(Math.random() * 100) + 1;
  
  let  rest = Math.abs(luckyNumber - userNum)
 
  if (userNum == luckyNumber) {
    return `User Number is: ${userNum}. Lucky Number is: ${luckyNumber}. So, YOU WON!!`
  }
  else if (rest <= 10) {
    return `User Number is: ${userNum}. Lucky Number is: ${luckyNumber}. You won ${100-(rest*10)} dollars`
  }
  else{return `User Number is: ${userNum}. Lucky Number is: ${luckyNumber}. YOU LOST!!!!!`}
}


lottery();