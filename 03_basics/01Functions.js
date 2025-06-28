function sayMyName() {  // when we have to use any thing multiple times in code then we use functions
    console.log("A");
    console.log("n");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("v");
}

// sayMyName //this is the reference of the functionn
// sayMyName() // and by adding parenthesis the reference is ready to execute

function addTwoNum1(num1, num2) {
    console.log(num1 + num2)
}
function addTwoNum(num1, num2) {
    // let result = num1 + num2
    return num1 + num2
    console.log("Anubhav") // this anubhav will never execuute beacause it comes after return keyword
 }

const result = addTwoNum(5, 4)

// console.log(`Result is ${addTwoNum( 5, 5)}`);

function loginUserMessage(username = "user") { // in this we set the default value as sam, means we dont give any output  
    if (!username) {
        console.log(`Please log in`)
        return 
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Anubhav")); // valid string
// console.log(loginUserMessage("")); // empty sting
// console.log(loginUserMessage()); // it will give the output as undefined

function calculateCartPrice(...Price) { //whenever we have definate parameters or we have to pass many argument at once then the reset case is used. it is denoted by (...parameter). it collect all values and convert it to a array.
    return Price
}

// console.log(calculateCartPrice(400, 500, 600, 770));

const user = {
    username: "sam",
    price: 199
}

function handleObject(anyObject) {
    console.log(`${anyObject.username} is the username & ${anyObject.price} is the price.`)
}

// handleObject(user)
// handleObject({
//     username: "joy",
//     price: 559
// })

const newArray = [100, 200, 500, 700]
function handleArray(getArray) {
    return` the third element of array is ${getArray[2]}`
}

// console.log(handleArray(newArray))
console.log(handleArray([100, 500, 700, 800]))
