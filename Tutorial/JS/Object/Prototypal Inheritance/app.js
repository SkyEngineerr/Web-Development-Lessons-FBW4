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
        return this.authorities
    }
}

admin.addAuthor(1,'eren')

console.log(admin.authorities);
console.log(users);
console.log(guest);

/////////////////////////////////////////////////
function Product(iName, iPrice) {
    this.name = iName
    this.price = iPrice
    this.getPrice = function(){
        return this.price
    }
}

const p1 = new Product ('iPhone', 1100)
console.log(p1);

function Food (iName, iPrice, iVegan) {
    Product.call(this,iName, iPrice) // __proto__ = Product (ikisi ayni sey)
    this.category = 'food';
    this.vegan = iVegan;
}

const p2 = new Food ('salad', 3, true)
console.log(p2);
console.log(p2.getPrice());

/////////////////////////////////////////////////


function Users2 (username, password)  {
    this.name = username
    this.pass = password
    changePassword = function (newPass) {
        this.pass = newPass
    }
}

const u1 = new Users2 ('sfks', 'realrealreal')

function Guest2 (username, password) {
    role = "bla bla bla"
    authorities = ['read']
    Users2.call(this, username, password)
}

const g1 = new Guest2('asdas', '12213213')
console.log(g1);