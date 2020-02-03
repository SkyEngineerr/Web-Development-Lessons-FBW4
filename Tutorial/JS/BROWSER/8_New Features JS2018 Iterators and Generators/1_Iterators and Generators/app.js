//Iterators Example
function nameIterator (names) {
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < names.length ? 
            {value:names[nextIndex++],
            done: false}:
            {done:true}
        }
    }
}


//Create an array of names

// const namesArr = ['Eren', 'Seyma', 'Rifat', 'Bahriye', 'Betus', 'Ali', 'Erva', 'Sevde']

// //Init iterator
// const names = nameIterator (namesArr)
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

//Generator Example
function* sayNames() {
    yield 'Eren'
    yield 'Seyma'
    yield 'Rifat'
    yield 'Bahriye'
}


const name = sayNames()
console.log(name.next());

//ID Generator
function* idCreator(){
    let index = 1;
    while(true){
        yield index++
    }
}

const gen = idCreator()

console.log(gen.next());
