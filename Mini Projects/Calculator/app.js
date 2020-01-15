const button = document.getElementsByClassName("numbers")
const input = document.getElementById("input")
const operator = document.getElementsByClassName("operator")
const equalSign = document.getElementById("equal-sign-operator")

console.log(input.value);


for (item of button) {
    item.addEventListener('click', keyOutPut)
}
for (item of operator) {
    item.addEventListener('click', keyOutPut)
}

function keyOutPut (e) {
    //console.log(input.value);
    input.value = input.value + '' +e.target.value
}


for (item of operator) {
    item.addEventListener('click', operatorFunction)
}


let arr = []
let plusSign;
let minusSign;
let multipleSign;
let divideSign;

function operatorFunction (e) {
    console.log(e.target.value);
    if(arr.length < 3) {
        arr.push(input.value)
        arr.push(e.target.value)
        console.log(e.target.value)
        console.log(arr)
    }
    if (arr.length > 3) {
        if(arr[1] == '+') {
            console.log(arr[0], arr[2])
            arr.unshift(arr[0] + arr[2])
            arr.push(input.value)
            
            arr.splice(2)
        }
        else if(arr[1] == '-') {
            arr.unshift(arr[0] - arr[2])
            arr.splice(1)
        }
        else if(arr[1] == '/') {
            arr.unshift(arr[0] / arr[2])
            arr.splice(1)
        }
        else if(arr[1] == '*') {
            arr.unshift(arr[0] * arr[2])
            arr.splice(1)
        }
        console.log(arr)
    }
    
    input.value = ""
    console.log(arr)
    
}

equalSign.addEventListener('click', function equal(e){
   
    if(arr[1] == '+') {
        input.value = arr[0] + arr[1]
    }
    else if(arr[1] == '-') {
        input.value = arr[0] - arr[1]
    }
    else if(arr[1] == '/') {
        input.value = arr[0] / arr[1]
    }
    else if(arr[1] == '*') {
        input.value = arr[0] * arr[1]
    }
    
})

console.log(arr)