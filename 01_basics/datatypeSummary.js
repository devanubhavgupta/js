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