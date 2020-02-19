import Human from './person.js'
import {makeHimSayhisname, makeHimSayherage} from './person.js'

let fabian = new Human ('Fabian', 23, "male")

console.log(fabian.sayMyName());

console.log(makeHimSayhisname(fabian));

let mariam = new Human ('Mariam', 31, "female")

console.log(makeHimSayherage(mariam));