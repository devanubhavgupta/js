// If

if (true) {
    //  code runs perfectly
}
if (false){
    // code doesn't run 
}

// ===================================================================================================

// Comparison Operators
// >, <, <=, >=, ==, !=, ===(ensure that the datatype is also same)

// ===================================================================================================

// If-Else
 
const temperature = 41

if (temperature > 40) {
    console.log(`Greater than 40`);  
} else {
    console.log(`Lesser than 40`);  
}

// ===================================================================================================

// Shorthand to write if-else

// if (true) console.log(`HEllo`), console.log(`Good morning`); // bad way to write two or more lines in the if statement.

// Else-if:

const score = 88

if (score < 70) {
    console.log(`Your grade is D`);
}else if (score < 80) {
    console.log(` Your grade is C`);
}else if(score < 90){
    console.log(`Your grade is B`);
}else{
    console.log(`Your grade is A`);
}

// Multiple condition

const userLoggedIn = true
const debitCard = true
const loggedByGoogle = true
const loggedByEmail = false

if (userLoggedIn && debitCard) {
    console.log(`You are eligible`);
} else {
    console.log(`You're not eligible`);
}

if (loggedByEmail || loggedByGoogle) {
    console.log(`User logged In`);
}