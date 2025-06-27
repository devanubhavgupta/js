// if we declared objects as the literals then it is not a singleton, and if it declare by constructor then is will be a singleton

//object literals
const mySym = Symbol("key1")
const JsUser ={
    name: "Anubhav",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "anubhav@google.com",
    inLoggedIn: false,
    lastLoggedIn: ["Mon", "Tue", "Sat"],
}

// console.log(JsUser); // to access the whole object
//console.log(JsUser.email); // to access one variable of the object
//console.log(JsUser["name"]); // another way to access the specific variable

JsUser.location =  "Mumbai" // the way to change the value of any object's variable

// Object.freeze(JsUser) // by this syntax we can freeze/lock the object
JsUser.location =  "Pune"
//console.log(JsUser);

JsUser.greeting =  function() {
    console.log("Hello JsUser!!");
}
JsUser.greetingTwo =  function() {
    console.log(`Hello JsUser!! ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());