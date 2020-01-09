const year = new Date().getFullYear();
const month = new Date().getMonth()
const day = new Date().getDay()

const weekdays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

const firstDay = new Date(year, 0, 1).getDay();
console.log(weekdays[firstDay]);

console.log(month);
console.log(year);
console.log(day);

let table = document.getElementById("myTable")
console.log(table.rows[3]);

// if (weekdays[firstDay] == "Wed") {
//     table.cells.item(0).innerHTML = '1'
// }



// let firstDay = (new Date(year:String, month:index[0-11])).getDay();
