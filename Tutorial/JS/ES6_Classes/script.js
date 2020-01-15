/////////////////////////////////////////////////////////////////////////////                
                //CLASS BASIC SYNTAX FOR DECLARATION//

class User {
    //we should start with constructor
    constructor (userName, passWord) {
        this.name = userName
        this.password = passWord
    }
    //we write the properties inside the constructor
    //but we write the methods outside the constructor
    changePass(newPass) {
        this.pass = newPass
    }
}

//////////////////////////////////////////////////////////////////////////////

let u1 = new User('Hercule', '1234')
console.log(u1);

class Person {
    constructor(firstName, lastName) {
        this.name = firstName
        this.lastname = lastName
    }
    greetings () {
        return `Hello Mr. ${this.name} ${this.lastname}`
    }
}

let p1 = new Person ('Eren' , 'Yilmaz')
console.log(p1.greetings());