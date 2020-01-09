const year = new Date().getFullYear();
const month = new Date().getMonth()
const day = new Date().getDay()

const weekdays = [1, 2, 3, 4, 5, 6, 7];

const firstDay = new Date(year, 0, 1).getDay();
console.log(weekdays[firstDay]);
console.log(month);
console.log(year);
console.log(day);

let tableD = document.querySelectorAll('td')

console.log(tableD[0]);

let getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate()
}

console.log(getDaysInMonth(0,2020));

let count = weekdays[firstDay] - 1
for (let i = 1; i < getDaysInMonth(0,2020)+1; i++) {
    count = count + 1
    tableD[count].innerHTML = i;
}



// let firstDay = (new Date(year:String, month:index[0-11])).getDay();


////Next and Back Buttons////
let bigDate = document.getElementById("bigDate")
bigDate.innerHTML = month + ' ' + year

const next = document.getElementById("Next");


next.addEventListener('click', event => {
  
    bigDate.innerHTML = (month + 1 )+ ' ' + year;
  });