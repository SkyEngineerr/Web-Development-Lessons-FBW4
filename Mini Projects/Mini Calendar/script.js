let tableD = document.querySelectorAll('td')

const submitButton = document.getElementById("submitButton");
const inputMonth = document.getElementById('inputMonth')
const inputYear = document.getElementById('inputYear')


const weekdays = [1, 2, 3, 4, 5, 6, 7];
const days = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']


submitButton.addEventListener('click', event => {
    event.preventDefault()
    let date = 0;

    let firstDay = new Date(inputYear.value, inputMonth.value, 1);

    date = new Date(inputYear.value, (inputMonth.value+1), 1);
    lastDay = new Date(date - 1);
    
    console.log(firstDay);
    console.log(lastDay);
    console.log(inputYear.value);
    console.log(inputMonth.value);
    
    bigDate.innerHTML = days[inputMonth.value] + ' ' + inputYear.value;

    

    let count = weekdays[firstDay] -2
   

    for (let j=0; j<35; j++) {
        tableD[j].innerHTML = '';
    }
  

    for (let i = 1; i < (lastDay + 1); i++) {
        count = count +1 
        tableD[count].innerHTML = i; 
    }
});