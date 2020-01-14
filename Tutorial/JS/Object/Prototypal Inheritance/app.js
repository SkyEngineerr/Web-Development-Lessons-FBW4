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

let longEars = {
    earlength: 10,
    __proto__:rabbit
}

function Animal(x) {
    this.eats = x
}


//Prototype is an invisible property of all objects that we created. it has typeof object.
//It has some predefined methods like "isProtoTypeOf()" and more. We can use prototype to add extra properties after we finish our object definition
let animal1 = new Animal(true)


let users = {
    name: 'username',
    pass: 'Password',
    changePassword: function (newPass) {
        this.pass = newPass
    }
}

let guest = {
    role: "bla bla bla",
    authorities: ['read'],
    __proto__ : users
}

guest.changePassword('myEasyPass')


let admin = {
    __proto__ : guest,
    addAuthor: function (addOrDel, item) {
        if(addOrDel) {
            if(item){
                this.authorities.push(item)
            } else {
            console.log("we can not add empty item");
           }
        }
        else{
            if(item){
                let pos = 0
                for(i=0; i<this.authorities.length; i++) {
                    if(this.authorities[i] == item) pos = i
                }
                if(pos>0) this.authorities.splice(pos,1)
                else console.log('Sorry iten does not exist');
            }else {
                this.authorities.pop()
            }
        }
    }
}

admin.addAuthor(1,'eren')

console.log(admin.authorities);
console.log(users);
console.log(guest);
