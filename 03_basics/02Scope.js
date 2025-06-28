let a = 10                                  // Global Scope
const b = 20
// var c  = 30

if (true) {
    let a = 100                                  // Block Scope
    const b = 20
    // var c = 30            // var doesn't support any type of block scope or any type of global scope, so developers use less var
    // console.log(`Inner: ${a}`);
    
}
 

// console.log(a);
// console.log(b);
// console.log(c); 

function one() {
    const username = "anubhav"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}

// one()
// in js the scope follows a rule that child function can access the parent function but the parent function can not do the same

if (true) {
    const name = "anubhav"
    if (name === "anubhav") {
        const website = "youtube"
        console.log(name + website);
    }
    // console.log(website)
}

// console.log(name)


// ========================Something Interesting===================================//

function addOne(num1) {
    return num1 + 1
}

console.log(addOne(5));

// console.log(addTwo(2)); // we can not access any function before its initilisation, if we want to use then use after the initilisation.
const addTwo = function(num) {
    return num + 2
}