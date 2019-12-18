let re;
//literal characters
re = /hello/i;

//metacharacter symbols 
re = /^h/i; //must start with 
re = /d$/i; // must ends with (one char)
re = /world$/i; // must ends with (complete word)
re = /^world$/gi; //must include only this word
re = /h..llo/i; // maches any One character
re =/gre?a?y/i; //optional character (dolar isaratenin solundaki karakter icin gecerli)
re =/gre?a?y\?$/i; //Escape Character

//Brackets [] - Character Sets
re = /gr[ae]y/i; //must be an a or e
re = /[GF]ray/i; //must be a g or f
re = /[^GF]ray/i; //match anything except g or f
re = /[A-Z]ray/i; // Match any uppercase letter
re = /[a-z]ray/i; // Match any lowercase letter
re = /[A-Za-z]ray/i; // Match any letter with any case
re = /[0-9]ray/i; // Match any digit 

//Braces {} - Quantifiers
re = /Hel{3}o/i // Must occure exactly {m} at this point
re = /Hel{2,4}o/i; // Must occure at least m  and maximum n {m,n} at this point
re = /Hel{2,}o/i;

//Parantheses () - Grouping
re= /([0-9]x){3}/;

//Shorthnad Character Classes
re = /\w/  //word character - alphanumeric or _
re = /\w+/ // + it means one or more
re = /\W/ // Non-word character
re = /\d/ // digit character - /\d/ === /[0-9]/
re = /\D/ // non-digit character
re = /\s/ //match whitespace char
re = /\S/ //match there is no space
re =/\bHello\b/  // word boundry       non word character after it

//Assertions
re = /x(?=y)/i // Match x only if followed by y
re = /x(?!)y/i// Match x only if not followed by y

//string to match
const str = '4xy4x4wx';

//Log Results
const result = re.exec(str);
console.log(result);

function reTest (re, str) {
    if (re.test(str)){
        console.log(`${str} matches ${re.source}`)
    } else{
        console.log(`${str} does not match ${re.source}`)
    }
}

reTest(re, str)


function checkFirstChar (str) {
    let re2= /^[A-Z]/;
    return re2.test(str);
}

console.log(checkFirstChar("Eren"));