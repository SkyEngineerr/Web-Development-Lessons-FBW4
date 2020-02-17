const firstName = "Usame Eren"
const lastName = "Yilmaz"
const age = 32;
const str = "web design , web development, programing";
let val ;
val = firstName + lastName;
// concatination
val = firstName +' '+ lastName;
// Appended
val = "safwan";
val+= 'Kher';
val = 'Hello, My name is' + firstName+'and I am '+age+'years old';
//Escaping
val = 'That\'s awesome, I can\'t wait';
//length
val = firstName.length
//concat()
val = firstName.concat('', lastName);
//change case
val = firstName.toLowerCase();
val = lastName.toUpperCase();
val = lastName[2];
// indexOf()
val = firstName.indexOf('a')
val = firstName.lastIndexOf('a')
console.log(val);
//charAt()
val = firstName.charAt(4)
console.log(val);

//Get last char
val = firstName[firstName.length-1]

//substring()
val = str. substring(0,4)
console.log(val);

//slice
val = str.slice(0,4)
val = str.slice(-3)
console.log(val);

//split()
val = str.split(' ')
console.log(val);

//includes()






function leftDigit(num) {
    let arr = num.split('');
  let newArr = [];

 for (let i = 0; i < arr.length; i++) {
   if (!isNaN(arr[i])) {
    return Number(num[i])
   }
 }

}


leftDigit("U//DertHe1nflu3nC3")




function findCountMyName (str) {
    let arr = str.split(' ')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 'Eren') {
        count = count + 1
      }
    }
  
    return `Eren found ${count} times in the text`
  }
  
  
  findCountMyName ('Eren go to school and Eren eat lahmacun.')