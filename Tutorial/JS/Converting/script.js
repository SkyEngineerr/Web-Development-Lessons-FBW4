let val;
let par;

//Number to String
val = 555;

//val = String(555);
par = String(val);
par = String(val + 4);

//Boolean to String;
val = true;
par = String(val);

//Date to String
val = new Date();
par = String(val);

//Array to String
val = [1, 2, 3, 4, 5];
par = String(val);

//to String
val = [1, 2, 3, 4, 5];
par = val.toString();

//String to Number
val = '555';
par = Number(val)

//Boolean to Number
val = true;
par = Number(val);

//Null to Number
val = null;
par = Number(val);

//Special String to Number
val = 'hello';
par = Number(val);

//Output
console.log(val);
console.log(typeof val);

//console.log(val.length);
console.log(par);
console.log(typeof par);
console.log(par.toFixed(2)); //xxx.xx
//console.log(par.length);
//console.log(par === val);

function checkNan (x) {
    if (isNaN(x)) {
        return NaN;
    }
    return x;
}

console.log(checkNan('hello'));