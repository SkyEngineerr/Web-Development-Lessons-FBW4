class Person {
    constructor (name, age , gender) {
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    sayMyName() {
        return `My Name is ${this.name}`
    } 
}


function makeHimSayhisname (human) {
    return human.sayMyName()
}

function makeHimSayherage (human) {
    return human.age
}

export {makeHimSayhisname, makeHimSayherage}
export default Person;
