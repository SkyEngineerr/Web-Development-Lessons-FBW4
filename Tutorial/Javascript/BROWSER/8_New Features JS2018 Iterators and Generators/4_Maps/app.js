//Object Extra Infos
// let person = {

// }

// person.age = 48;
// person['firstname'] = 'eren'
// let lastname = 'lastname'
// let value = 'yilmaz'
// person[lastname] = value;
// console.log(person);

//MAPS = key-value paris - can use ANY type as a key or value


const map1 = new Map();
//Map is a collection of keyed data items, just like Object. But the main difference is that Map allows keys of any type. 

/**
 * new Map() : creates the map
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 */

 //map size
 console.log(map1.size);

 //set keys
 const key1 = 'something',
       key2 = {},
       key3 = function(){}

//Set map values by the keys
map1.set(key1, 'value of key1')
map1.set(key2, {a: 5})
map1.set(key3, [1,2,3])

console.log(map1.size);

//Get value by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

//Iterating MAPS
//Loop using for...off
console.log(map1);
for ([key, value] of map1) {
    console.log(`${key} = ${value}`);
}

//iterate keys only
for(let key of map1.keys()){
    console.log(key);
}

//iterate values only
for(let value of map1.values()){
    console.log(value);
}

//Loop with forEach

map1.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});

//Conver to Arrays
//Create an array of key/value pairs
const keyValArr = Array.from(map1)
console.log(keyValArr);
console.log(keyValArr[1]);
console.log(keyValArr[1][1]);1
