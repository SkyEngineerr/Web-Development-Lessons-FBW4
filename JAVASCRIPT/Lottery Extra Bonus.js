function lottery () {
 let count = 0;
 let win = 0;

  for (let i = 0; i < 10; i++){

  let luckyNumber = Math.floor(Math.random() * 100) + 1;
  let userNum= Math.floor(Math.random() * 100) + 1;
  let rest = Math.abs(luckyNumber - userNum)
  console.log(` LUCKY NUM: ${luckyNumber}`)
  console.log(` USER NUMBER: ${userNum}`)
  if (userNum == luckyNumber) {
    count = count + 100;
    win = win +1
  }

  else if (rest <= 10) {
    count = count + (100-(rest*10))
     win = win +1
  }
  
 }
return `you win ${count} dollars and you win ${win} times.`
}

lottery();