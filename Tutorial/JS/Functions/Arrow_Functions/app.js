//function sum(a, b){
// return a+b
//}

//const sum = function(a,b){
// return a+b
//}

let sum = (a, b) => a+b
let dublicate = n => n*2
let pow = (x, n) => {
    /*multi lines of code*/
    
    if(n == 0) return 1
    let result = x
    for(i=1; i<n;i++) result*=x; 
    // result = result * x

    return result
}

let sayHi = () => console.log('Hi')
sayHi()
let res = sum(150, 2025)
res = dublicate(8)
res = pow(8,3)
console.log(res)


let sum = (opreand1, opreand2) => opreand1 + opreand2
let multi = (opreand1, opreand2) => opreand1 * opreand2
let divide = (opreand1, opreand2) => opreand1 / opreand2
let minus = (opreand1, opreand2) => opreand1 - opreand2
