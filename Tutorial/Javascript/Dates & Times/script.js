// let val;
// // Date Constructor
// const today = new Date();
// let birthday = new Date('03-24-1987 07:33:05');
// birthday = new Date('June 27 1987');
// console.log(today)
// console.log (birthday)
// // Date GET Methods
// val = today.getMonth();
// /*returns the month in the specified date according to local time, as a zero-based value
// (where zero indicates the first month of the year)*/
// val = today.getDate();
// /* The getDate() method returns the day of the month for the specified
// date according to local TimeRanges.*/
// val = today.getDay(); // returns the day of the week;
// val = today.getFullYear(); // returns the four digits year;
// val = today.getHours(); // returns the hours in local time;
// val = today.getMinutes(); // returns the minitues in local time;
// val = today.getSeconds(); // returns the seconds in local time;
// val = today.getMilliseconds(); //returns the milliseconds;
// val = today.getTime();
// console.log(val)
// // Date SET Methods
// birthday.setMonth(8);
// birthday.setDate(15);
// birthday.setFullYear(1980);
// birthday.setHours(11);
// birthday.setMinutes(15);
// birthday.setSeconds(00);
// console.log(birthday)

let workers = [
    {id:1, job:'Maschine Learn Engineer', salary:10000},
    {id:2, job:'Data Analyst', salary:7500},
    {id:3, job:'Web-Dev Full Stack', salary:3000},
    {id:4, job:'Web-Dev Full Stack', salary:3000},
    {id:5, job:'Web-Dev Backend', salary:2000},
    {id:6, job:'Web-Dev Backend', salary:2000},
    {id:7, job:'Web-Dev Backend', salary:2000},
    {id:8, job:'Web-Dev Backend', salary:2000},
    {id:9, job:'Web-Dev Front-end', salary:1500},
    {id:10, job:'Web-Dev Front-end', salary:1500},
    {id:11, job:'Web-Dev Front-end', salary:1500},
    {id:12, job:'Web-Dev Front-end', salary:1500},
    {id:13, job:'Normal Workers', salary:50000},
    {id:14, job:'DevOp Engineer', salary:5000},
    {id:15, job:'DevOp Engineer', salary:5000},
    {id:16, job:'DevOp Engineer', salary:5000},
    {id:17, job:'DevOp Engineer', salary:5000},
    {id:18, job:'DevOp Engineer', salary:5000},
    {id:19, job:'Project Manager', salary:4000},
    {id:20, job:'Project Manager', salary:4000},
    {id:21, job:'Project Manager', salary:4000},
    {id:22, job:'Project Manager', salary:4000}
]

let budget = 100000;
let whatIpaid = 0;
let iDidNotPay = 0;

for (let person of workers) {
    if ((whatIpaid+person.salary) < budget){
        whatIpaid = whatIpaid + person.salary
        
    }
    else if( (whatIpaid+person.salary) > budget) {
        iDidNotPay += person.salary
        console.log(person);
    }
    
  
}

console.log(whatIpaid);  
console.log(iDidNotPay);  

return `I paid ${whatIpaid}$. Still I have ${budget - whatIpaid}$. But I could not pay ${iDidNotPay}$. Here is a list for who did not receive their money: ${whoDidNotRec}`

window