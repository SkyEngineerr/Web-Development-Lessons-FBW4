let animal = {
    eats : true,
    doesEat: function (){
        return this.eats
    }
}

//Create a new object using Object.create

let rabbit =  Object.create(animal)

// let rabbit =  Object.create(animal, {
//     longEars:{value:2},
//     jumps:{value: true}
// })

//SAME BUT EASY WAY IN FOLLOWING SECTION:

rabbit.longEars = 2;
rabbit.jumps = true


console.log(animal.doesEat());
console.log(rabbit.doesEat());
console.log(rabbit);



const persoProtos= {
    greetings : function () {
        return `Hello Mrs ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName
    }
}

const person = Object.create(persoProtos)
person.firstName = 'Farah'
person.lastName = 'Queen'
person.age = 28
person.martialStatus = 'single'

console.log(person);

console.log(person.greetings());
console.log(person.getsMarried());

const usersProto = {
    greetings : function () {
        return `Hello ${userName}. Your password is ${password}. Your role is ${role}`
    },
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

const guest = Object.create(usersProto)
guest.userName = 'Hercule'
guest.password = 12345
guest.role = 'guest'
person.authorities = 'read'

console.log(guest);