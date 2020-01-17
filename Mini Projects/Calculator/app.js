const button = document.getElementsByClassName("numbers")
const input = document.getElementById("input")
const operator = document.getElementsByClassName("operator")
const equalSign = document.getElementById("equal-sign-operator")

let arr = []

console.log(input.value);


for (item of button) {
    item.addEventListener('click', keyOutPut)
}



function keyOutPut (e) {
    //console.log(input.value);
    input.value = input.value + '' +e.target.value
}


for (item of operator) {
    item.addEventListener('click', operatorFunction)
}




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
    
    if (e.target.className == 'numbers') {
        if(arr.length < 2) {
            input.value = input.value + '' + e.target.value
        }
        else if (arr.length == 2) {
            if(input.value == '+'){
                input.value = ""
                input.value = input.value + '' + e.target.value
            }
            else if (arr[1] == '+') {
                input.value = ""
                input.value = input.value + '' + e.target.value
            }
            
        }
        
    }

    else if(e.target.className == 'operator') {
        if(arr.length < 2) {
            arr.push(input.value)
            arr.push(e.target.value)
            input.value = e.target.value
        }
        else if(arr.length == 2) {
            arr.unshift(parseFloat(arr[0]) + parseFloat(input.value))
            arr.splice(1)
            arr.push(e.target.value)
            input.value = arr[0]
        }
    }
  console.log(arr);
  
}



// function operatorFunction (e) {
//     console.log(e.target.value);
//     if(arr.length < 3) {
//         arr.push(input.value)
//         arr.push(e.target.value)
        
//         console.log(arr)
//     }
//     else if (arr.length >= 3) {
        
//             console.log(arr[0], arr[2])
//             arr.unshift(arr[0] + arr[2])
//             arr.splice(1)
//             arr.push(e.target.value)
            
        
//         // else if(arr[1] == '-') {
//         //     arr.unshift(arr[0] - arr[2])
//         //     arr.splice(1)
//         // }
//         // else if(arr[1] == '/') {
//         //     arr.unshift(arr[0] / arr[2])
//         //     arr.splice(1)
//         // }
//         // else if(arr[1] == '*') {
//         //     arr.unshift(arr[0] * arr[2])
//         //     arr.splice(1)
//         // }
//         // console.log(arr)
//     }
    
    
//     console.log(arr)
    
// }

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