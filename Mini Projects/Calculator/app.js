const button = document.getElementsByClassName("numbers")
const input = document.getElementById("input")

console.log(input.value);


for (item of button) {
    item.addEventListener('click', keyOutPut)
}

function keyOutPut (e) {
    console.log(input.value);
    input.value = e.target.value
}

