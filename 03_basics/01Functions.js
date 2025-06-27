function sayMyName() {  // when we have to use any thing multiple times in code then we use functions
    console.log("A");
    console.log("n");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("v");
}

sayMyName //this is the reference of the functionn
sayMyName() // and by adding parenthesis the reference is ready to execute

function addTwoNum1(num1, num2) {
    console.log(num1 + num2)
}
function addTwoNum(num1, num2) {
    // let result = num1 + num2
    return num1 + num2
    console.log("Anubhav") // this anubhav will never execuute beacause it comes after return keyword
 }

const result = addTwoNum(5, 4)

console.log(`Result is ${addTwoNum( 5, 5)}`);

function loginUserMessage(username = "user") { // in this we set the default value as sam, means we dont give any output  
    if (!username) {
        console.log(`Please log in`)
        return 
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Anubhav")); // valid string
console.log(loginUserMessage("")); // empty sting
console.log(loginUserMessage()); // it will give the output as undefined

