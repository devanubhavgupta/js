const user = {
    username: "anubhav",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // this function is used to know the details of the object which is present.
    }
}

// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

console.log(this); // it shows as empty because it capture the global as a object but there is not any object so it gives empty object

function chai() {
    console.log(this) //this function is never used inside of any function, it will always used inside a object.
}

function chai() {
    let username = "hitesh"
    console.log(this.username); // here the output is given as undefined because 
}

chai()
// ==============================ARROW FUNCTIONS==============================
const chai = () => {
    let username = "hitesh"
    console.log(this); // here the output is also undefined, this function is also used inside of arrow function, it a clearly myth busted that this function is not used inside a arrow fucntions.
}

chai()

// const addTwo = (num1, num2) => {   // arrow function can do all works same as the normal function
//     return num1 + num2  
// }

// const addTwo = (num1, num2) =>  num1 + num2 // it is also a way represent a arrow fucntion

// const addTwo = (num1, num2) => (num1 + num2) // it is also  a way to represent a arrow fucntion, this type of arrow function is used in react and react native.

const addTwo = (num1, num2) => ({username: "anubhav"}) // we can also give any object in arrow function as the given way and it gives same output as normal functions

console.log(addTwo(4, 5))

// const myArray = [2, 3, 5, 8, 7]

// myArray.forEach()