function myFunction() {
    var person = prompt();
    
    if (person == false) {
        document.write('Please write any name');
    }

    else if (person != null) {
        document.write ("Hello " + person + "! How are you today?");
      }
  }

  myFunction();



  function squared() {
    var person = prompt("write a number");
    

    if (!isNaN(person)) {
        document.write("result: " + person*person);
    }

    else {
        document.write ('write a number');
      }
  }

  squared();



  
  function checkPass() {
    var password = prompt("write your password");
    

    if (password.length > 8 && password.includes("$") ) {
        document.write("valid");
    }

    else {
        document.write ('invalid');
      }
  }

 checkPass();



 let paragraph = 'The quick brown fox jumps over the lazy dog.'
 let str = prompt('search for index of: ');

 let result = `Yes it is found in the position: ${paragraph.indexOf(str)}`
 document.write(result);


 function checkPassword (password, letter) {
   let input = prompt(letter)
   return `The position of ${input} is: ` + password.indexOf(input);
 }



 document.write(checkPassword('213213asd'));


 function checkPassword (price) {
  let input = prompt()
  return price + input;
}



document.write(checkPassword(123));