class Person {
    constructor(firstName, lastName) {
        this.name = firstName
        this.lastname = lastName
    }
    greetings () {
        return `Hello Mr. ${this.name} ${this.lastname}`
    }
}

class Customer extends Person {
    constructor (cFirstName, cLastName, phoneN, memberShip) {
        super(cFirstName, cLastName)
        this.phone = phoneN
        this.memberShip = memberShip
    }

    giveMemberShopCost (cost) {
        this.memcost = cost
    }
}

let c1 = new Customer('Eren', 'Yilmaz', "555-111-2", 'silver' )



class Property {
    constructor (location ,size) {
        this.location1 = location
        this.size1 = size
    }

}

class Flat extends Property {
    constructor (loc, size2, owner, price) {
        super(loc, size2)
        this.owner = owner
        this.price = price
    }
    calculatePrice () {
        return this.price * this.size1
    }
}

let myFlat = new Flat ('Istanbul', 40, 'Eren', 10)

console.log(myFlat.calculatePrice());



class Clinic extends Flat {
    constructor (type, doctor) {
        
    }
}


class Person {
   constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
   } 

}

class Doctor extends Person {
    constructor (spec, exp) { 
    }
}
