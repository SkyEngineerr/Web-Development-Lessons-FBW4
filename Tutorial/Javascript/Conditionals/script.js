/*
if(something){
    // do these instructions
} else if(condition 2){
    // do other instructions
}
else {
    // do these something else
}
*/
//const id = '100';
// EQUAL TO     
/*
if (id == 100){
    console.log(true)
} else {
    console.log(false)
}
// NOT EQUAL TO     
if (id != 100){
    console.log(true)
} else {
    console.log(false)
}
*/
//let id ='100';
//TEST IF UNDEFINED 
// if(typeof id == `undefined`){
//     console.log(`id is ${id}`)
// } else {
//     console.log(`It is defined and the value is ${id}`)
// }


// const name = 'Eren'
// const otherName = 'Seyma'
// const age = 30;
// const otherAge = 26;

// if (name === 'Eren' && otherName === 'Seyma'){
//     console.log('Done')
// }

// else{return false}

//TERNARY OPERATOR
//condition1 ? value1 : coundition2 ? value2 : other value

function payLess1 (isFriend) {

    return (isFriend ? `pay for the sis ${2}$` : `pay for the sis ${8}$`)
}


payLess1(false);

function payLess2 (arr, name1, name2) {

    return (arr.includes(name1) ? `${name1} pays for it` : `${name2} pays for ${8}$`)
}

let arr = ['Eren' , 'Ali' , 'Filiz']
payLess2(arr, 'Eren', 'Ahs');