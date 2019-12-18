let ul = document.createElement('ul')
let body = document.querySelector('body')
let header = document.createElement('h1')
body.appendChild(header)
header.appendChild(document.createTextNode('HelvetiList'))
console.log(body);
console.log(ul);
body.appendChild(ul)



let cities = ['ZURICH', 'GENAVA', 'WINTERHUR', 'LUSANNE', 'LUCERNE']

for (let i = 0; i < cities.length; i++) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(cities[i]))
    ul.appendChild(li)
}