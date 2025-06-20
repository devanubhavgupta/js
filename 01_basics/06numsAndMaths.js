const score = 400
console.log(score); // in this the js tracked by itself that score is number.

const balance = new Number(100)
console.log(balance); // but in this we defined and forced it to a number datatype.

// #Properties# 

console.log(balance.toString()); // it convert the balance to the string datatype.

console.log(balance.toString().length); // after converting it to string it'll follow all properties of the string by this we can get the length of the string as well.

console.log(balance.toFixed(2)); // basically it convert the number to a fixed or in decimal number. syntax: .toFixed(how much digit you want after decimal) // commonly used in e-commerce websites

const newNumber = 128.6524
console.log(newNumber.toPrecision(3)); // it basically precise the decimal number or a whole number to a precised number upto the length is given. it basically round off the number and give the output as an string.

const amount = 52000000
console.log(amount.toLocaleString('en-IN')); // for indian number system type.
console.log(amount.toLocaleString()); // for the US number system type.

//----------------------------------MATHS---------------------------------------//

console.log(Math); //Math is a Object not a fucntion and it carry many of property in it.
console.log(Math.abs(-5)); //Math.abs() is used to get the absolute values (the negative integers to positive integers)
console.log(Math.round(5.654)); //Math.round() is used to get the round off value of the decimal value.
console.log(Math.ceil(8.2)); // Math.ceil() is used to get the value higher round off value of the decimal value.
console.log(Math.floor(4.5)); //Maths.floor() is used to get the value lower round off value of the decimal value.

console.log(Math.min(4,5,7,2,9)); //Math.min() is used to get the minimum value from the given array.
console.log(Math.max(4,5,7,2,9)); //Math.min() is used to get the maximum value from the given array.

//The most Important Math Property which is used in js is Math.random()

console.log(Math.random()); // gives a random value between 0 and 1.
console.log((Math.random()*10) + 1); // gives random value between 1 and 10. (can be a decimal number)
console.log(Math.floor(Math.random()*10) + 1); // gives random value between 1 and 10. (only a whole number)
console.log(Math.floor(Math.random()*6) + 1); // gives random value between 1 and 6. (only a whole number)

const minLimit = 10
const maxLimit = 20

console.log(Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit) // it is a formula to get any random value within a limit