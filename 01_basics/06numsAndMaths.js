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