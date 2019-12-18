document.getElementById('loan-form').addEventListener('submit', calculateResults)

const amount = document.getElementById('amount');
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')



function calculateResults (e) {
    e.preventDefault();
    //Priciples
    let amontValue = parseFloat(amount.value)
    let interestValue = parseFloat(interest.value)/ 100 /12;
    let yearsValue = parseFloat(years.value) *12

    let x = Math.pow(1 + interestValue, yearsValue);
    let monthly = (amountValue*x*interestValue)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * yearsValue).toFixed(2)
        totalInterest.value = ((monthly * yearsValue) - amountValue).toFixed(2)
        monthlyPayment.disabled = false;
    }

    
    
    

    
}