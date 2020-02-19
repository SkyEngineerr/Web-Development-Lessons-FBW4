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


function letHimSayhisname (human) {
    human.sayMyName()
}

function letHimSayherage (human) {
    return human.age
}

export default Person;
