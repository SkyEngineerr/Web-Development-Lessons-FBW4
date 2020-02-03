// get the element

let firstDiv = document.getElementById("fDiv")

//make its background color = red

// firstDiv.style.backgroundColor = 'red'
// firstDiv.style.color = 'white'


//Also there is a global variable named by id that rreferences the element:

//sDiv is a reference to DOM-element with id = 'sDiv'

// sDiv.style.backgroundColor = 'yellow'
// sDiv.style.color= 'red'

//That's unless we declare a Javascript variable with the same name, than it takes precendence

//let sDiv = 5; //Now sDiv is 5, not a reference to <div id='sDiv'>

//console.log(sDiv);

//////////////////////////////////////////////////

// let header = document.getElementById('header')
// header.style.backgroundColor = "yellow"

// let row1 = document.getElementById('row1')
// row1.style.backgroundColor = "yellowgreen"

// let row2 = document.getElementById('row2')
// row2.style.backgroundColor = "orange"



// document.getElementById('spec').style.backgroundColor = "purple"


let body = document.querySelector('body');
let table = document.createElement('table');
body.appendChild(table)

for (let i = 0; i<12; i++) {
   if(i < 3) {
    let tr = document.createElement('tr');
    table.appendChild(tr)
   }
   else if(i < 6 && i >= 3) {
    let th = document.createElement('th')
    th.appendChild(document.createTextNode('HEADER'))
    table.firstChild.appendChild(th);
    th.style.backgroundColor = 'yellow'
   }
   else if (i<9 && i >= 6) {
    let td = document.createElement('td')
    td.appendChild(document.createTextNode('name'))
    table.childNodes[1].appendChild(td)
    td.style.backgroundColor = 'yellowgreen'
   }

   else if (i >= 9) {
    let td = document.createElement('td')
    td.appendChild(document.createTextNode('name'))
    table.childNodes[2].appendChild(td)
    td.style.backgroundColor ='pink'
   }
}



function createTable () {
  const body1 = document.querySelector('body')
  const tbl = document.createElement('table')
  const tblBody = document.createElement('tbody')

  for (let i=0; i <=3; i++){
    const row = document.createElement('tr')
    for (let j=0; j<3; j++) {
      const cell = document.createElement('td')
      const cellText = document.createTextNode('cell is row'+i+' ,and column '+j)
      cell.id=(j+""+i)
      cell.appendChild(cellText)
      row.appendChild(cell)
    }
    tblBody.appendChild(row)
    
  }
  tbl.appendChild(tblBody)
  body1.appendChild(tbl)

  console.log(cell.id);
}

createTable ()












