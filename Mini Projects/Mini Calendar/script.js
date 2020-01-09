let tableD = document.querySelectorAll('td')

// console.log(tableD[0]);

let getDaysInMonth = function (month, year) {
     return new Date(year, month, 0).getDate()
}



////Next and Back Buttons////

const submitButton = document.getElementById("submitButton");
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')
console.log(inputMonth);

const weekdays = [1, 2, 3, 4, 5, 6, 7];


submitButton.addEventListener('click', event => {
    event.preventDefault()
    let firstDay = new Date(inputYear.value, inputMonth.value, 1).getDay();
    bigDate.innerHTML = inputMonth.value + ' ' + inputYear.value;
    console.log(weekdays[firstDay]);

    let count = weekdays[firstDay] -2
    console.log(count);

    for (let i = 1; i < getDaysInMonth(inputMonth.value, inputYear.value) + 1; i++) {
        count = count +1 
        tableD[count].innerHTML = i; 
    }

    
});