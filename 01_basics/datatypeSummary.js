// console.log("Summary of Data types")

// types of data types:

// 1. Primitive Datatypes:

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

// js is a dynamic type language coz in it we don't have to put the datatype before or define the type of any contant or variable datatype.
x = 100;
x = "Hello";

const id = Symbol('123')
const newId = Symbol('123')

// console.assert.log(id === newId); //It'll give false coz it is not equal.

const bigNumber = 4567946131984651641331n;
// console.log(typeof bigNumber);



//2. Reference Datatypes (Non- Primitive Data types)
// Array, Objects, Function

const heros = ["Spider-man", "Iron-man", "alfredo"];
let myObj = {
    name: "Anubhav",
    age: 20
}

const myFunction = function(){
    console.log("Hello World...")
}


// ------------------------------------------------------------------------

// Stack(Primitive), Heap (Non-Primitive)

let myName = "Anubhav Gupta";
let anotherName = myName

anotherName = "Anubh"

//console.log(myName); // the output'll be the Anubhav Gupta because stack just copy the value and variable and paste it into another variable. 
//console.log(anotherName); // the output will be Anubh because when we change the value then it will not change the original variable, it just changed the copy of the original variable.


// Heap:

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anubhav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// the value of email changed in both of varible because in heap it just give the original value to another variable and all changes we do in another variable are also changed in first variable