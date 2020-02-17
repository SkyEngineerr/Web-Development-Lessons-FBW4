function check (password) {
    
     if (password.length > 8) {
         for (let i=0; i<password.length; i++) {
             if (password[i] ==  "$") {
                 console.log('valid')
                 break;
             }
         }
     } else {
         return console.log('invalid')``
     }

  
 }

console.log(check("e$ren1234"));

////////////////////////new exercise: Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example

function drEvil (value) {

    if (value > 1000000) {
        console.log (value + ' dollars ' + '(pinky)')
    }

    else {
        console.log('wrong')
    }
}

drEvil (10000001);

///////////////////////// new exercise :Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

function mixUp(string1, string2) {
    return console.log(string2.concat(" ", string1))
}


mixUp('Hello' , 'World');

/////new exercise: Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

function fixStart(s) {
    var c = s.charAt(0);
    return c + s.slice(1).replace(new RegExp(c, 'g'), '*');
  }

fixStart ('babble')

/////////////////////// new exercise: replace the word

let str1 = 'The quick brown fox jumps over the lazy dog'
let searchTerm = 'brown'
let replaceBy = 'blue'


console.log(str1.replace(searchTerm, replaceBy));



//////////////////////// new exercise: find specific character


function check2 (password) {
    
    if (password.length > 8 && password.includes('$')) {
                console.log('valid')  
        }
     else {
        return console.log('invalid')``
    }
}

check2 ('eren$12123')

////////////////////// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

function verbing (str) {
    let newStr = str.slice(str.length-3)
    if (str.length > 3 && newStr == 'ing') {
        console.log(str.concat('ly'))
    }

    else if (str.length > 3) {
        console.log(str.concat('ing'))
    }

    else (
        console.log(str)
    )
}

verbing('going')

/////////////////////////////new exercise: change the word

function checkStr (str, word) {
    if (str.includes(word)) {
        console.log(str.replace(word, 'BLACK'));
    }

    else{
        console.log(str);
    }

}

checkStr('The quick brown fox jumps over the lazy dog', 'jumps')

/////////////////// New Exercise: Create a function called notBad that takes a single argument, a string.
//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

function notBad(str) {
    if(str.includes('not') && str.includes('bad') ){
        console.log(str.slice(str.indexOf('not'), str.lastIndexOf('bad')))
    }
}

notBad('This dinner is not that bad tonight!');


/////////////////////////New Exercise
function replaceBy2 (p, ph1, ph2) {
    if (p.includes(ph1)) {
        return p.replace(ph1, ph2)
    } else {
        return ph1 + " " + "is not found";
    }
}

let str2 = 'The quick brown fox jumps over the lazy dog';
let x = 'lazy';
let y = 'smart';
let z = replaceBy2(str2, x, y);
console.log(z)

/////////////////////// New Exercise

function checkChar (password, name) {
    if (password.length > 8 || password.includes('$') && !password.includes(name)){
        console.log('valid')
    }
    else {
        console.log('invalid')
    }
}


checkChar('asddas', 'eren');

////////////// new exercise

function trying (obj) {
    

    return `${obj.name} has population of ${obj.population} and is situated in ${obj.continent}`
}

let cityFacts = {
    name:'Paris',
    population:'100.000',
    continent:'Asia'
};


document.write(trying(cityFacts));

//////////// new exercise


function myName (name) {
    
    document.write('Hello ' + name )
}

myName('Eren')
