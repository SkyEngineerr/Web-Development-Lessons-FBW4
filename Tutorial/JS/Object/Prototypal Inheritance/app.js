let animal = {
    eats : true
}

let rabbit = {
    jumps: true
}
console.log(animal);

//with constructor we use.prototype
//with object we use .__prototype__
rabbit.__proto__ = animal;

// console.log(rabbit.__proto__);
// console.log(animal);
// console.log(rabbit.eats);
console.log(rabbit);

function Animal(x) {
    this.eats = x
}


//Prototype is an invisible property of all objects that we created. it has typeof object.
//It has some predefined methods like "isProtoTypeOf()" and more. We can use prototype to add extra properties after we finish our object definition
let animal1 = new Animal(true)
