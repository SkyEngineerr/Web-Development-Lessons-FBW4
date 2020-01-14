const button = document.getElementsByClassName("numbers")
const input = document.getElementById("input")
const operator = document.getElementsByClassName("operator")
const equalSign = document.getElementById("equal-sign-operator")

console.log(input.value);


for (item of button) {
    item.addEventListener('click', keyOutPut)
}

function keyOutPut (e) {
    console.log(input.value);
    input.value = input.value + '' +e.target.value
}


for (item of operator) {
    item.addEventListener('click', operatorFunction)
}

let plusOp;
let firstCount;
let secondCount;

function operatorFunction (e) {
    console.log(e.target.value);
    plusOp = e.target.value;
    firstCount = input.value
    input.value = ""
    console.log(firstCount);
    console.log(plusOp);
}

equalSign.addEventListener('click', function equal(e){
    if(plusOp == '+') {
        
        input.value = firstCount + input.value
    }
})