//spread

a = [1,2,3,4]
console.log(...a);

b = "DCI"
console.log(...b);

c = [...a , ...b]
console.log(c);

let fruits = {
    orange: 'orange',
    apple: 'red'
}

let o = {...fruits}
console.log(typeof o);
console.log(fruits);

let d = [...a];
d.push(5)

console.log(d);


function sum (a,b,c) {
    return a+b+c
}

console.log(sum(...a));



//Destructuring
let e = [3,4,5,2,3,4,5]
let [f, ...REST] = e
console.log(e);
console.log(REST);

//Destructuring with objects
let webDevelopment = {
    frontend: "HTML",
    backend: "PHP",
    data: "SQL",
    server: "aws"
}

let {data, ...l} = webDevelopment

console.log(l);


