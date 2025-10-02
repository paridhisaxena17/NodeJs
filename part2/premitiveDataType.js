// there are 7 primitive data types in JavaScript:
// 1. Number
// 2. String
//number
// we have learn how to store the data in variable
let num = 10;
console.log(typeof num); // "number"
num = 10.5;
console.log(typeof num); // "number"

let newNum = new Number(20);

console.log(typeof newNum); // "object"

let num3 =3.4
console.log(typeof num3) //number


//boolean 
let isActive = true;
console.log(typeof isActive);
let isClosed = false;
console.log(typeof isClosed);  



// null and undefine 

let firstname;
console.log(typeof firstname); // "undefined"
console.log(firstname); // undefined
let firstname1 = null;
console.log(typeof firstname1); // "object" (this is a known quirk in JavaScript)
console.log(firstname1); // null


//String
let name = "John";
let name2 = 'Doe';
let name3 = `Smith`;
console.log(name, name2, name3);

let greet = name + ' pari'
console.log(greet) //Johnpari
// this called as string polation this is used to embed variable in string like put any string msg and then variable in ${}
let p= `hello ${greet} !` 
console.log(`hello2 ${greet} !`)
let newString = `value is ${10+3};`
console.log(newString) 
//value is 13`
let newString2 = `value of ${greet} is ${name3}`
console.log(newString2)
let newstring3 = `value ${greet.length}`
console.log(newstring3) //value 8


//Symbol is used to create unique identifiers for objects
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false
