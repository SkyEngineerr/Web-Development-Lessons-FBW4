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
    constructor(firstName, lastName, dob) {
        this.name = firstName
        this.lastname = lastName
        this.birthdate = dob
    }
    greetings () {
        return `Hello Mr. ${this.name} ${this.lastname}`
    }

    getsMarried (newLastName) {
        this.lName = newLastName
    }
}

let p1 = new Person ('Eren' , 'Yilmaz', "6-25-1989")
p1.getsMarried('Mercedes')

console.log(p1.greetings());
console.log(p1);

class Book {
    constructor (btitle, bauthor, bprice) {
        this.title = btitle
        this.author = bauthor
        this.price = bprice
    }
    changePrice (newPrice) {
        this.price = newPrice
    }

    giveType (newType) {
        this.newType = newType
    }
}

let book1 = new Book ('Harry Potter', 'JKR', '12$')
book1.changePrice('22$')
console.log(book1);