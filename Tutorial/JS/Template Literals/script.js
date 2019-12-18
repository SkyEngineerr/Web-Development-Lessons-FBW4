const name = 'John';
const age = 31;
const job = 'web developer'
const city = 'Hamburg'
function getCity(){
    return 'New York'
}
let html;

//without template strings (es5)

html = '<ul><li>Name: ' +name+ '</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>'


//with template literals (es6)
html = `
<ul>
    <li>Name: ${name} </li>
    <li>Age: ${age} </li>
    <li>Job: ${job} </li>
    <li>City: ${getCity()} </li>
    <li> ${1+14} </li>
    <li>${age >30 ? 'over 30' : 'Under 30'} </li>
</ul>
`;

//implentation
document.body.innerHTML = html;