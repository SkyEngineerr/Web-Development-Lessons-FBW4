// FOR LOOPS
/*
//for(i=0; i < 10; i++){
for(i=10; i>0; i--){
    if(i == 2)
    console.log(`${i} is my lucky number`)
    break;
}
//WHILE LOOP
let j = 0;
while(j < 10){
    console.log(`${j} is cool`) 
    j++;
}
let j = 10;
while(j > 5){
    console.log(`${j} is cool`)
    j--;
}
let j = 9;
while(j > 5 && j == 9){
    console.log(`${j} is cool`) 
    j--;
}
let j = 10;
let k = true;
while(j > 5 && k == true){
    console.log(`${j} is cool`) 
    j--;
}
*/
//DO WHILE
let t = 0;
do{
    console.log(`${t} is cool`)
    j--;
}while(t > 0)

const users = [
    {id:1, name:'Andri'}
    {id:2, name:'ALI'}
    {id:3, name:'EREN'}
    {id:4, name:'AKAL'}
];

const ids = users.map(function(u){
    return u.id
})

console.table(ids)

let food = ['Pizza', 'Kebab', 'Doner']
for (let counter = 0; counter < food.length; counter++){
    console.log(food[counter])
    document.write(food[counter]+'<br>')
}

//////////////////////////////////

let colors = ['Yellow', 'Black', 'White' ,'Red']
let item = "#cc00ee"
colors.push(item)
document.write('<hr>')
for(i=0; i < colors.length; i++) {
    document.write(colors[i] + '<br>')
}
