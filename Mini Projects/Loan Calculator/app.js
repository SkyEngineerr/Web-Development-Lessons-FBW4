document.getElementById('loan-form').addEventListener('submit', calculateResults)

const amount = document.getElementById('amount');
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')

console.log(amount, interest, years);

function calculateResults (e) {
    let x = Math.pow(1 + interest.value, years.value);
    let monthly = (principal.value*x*interest.value)/(x-1);

    console.log(monthlyPayment);
    console.log('e');

    preventDefault();
}