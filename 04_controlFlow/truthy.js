const userEmail = []

if (userEmail) {
    console.log(`Got it`);
}else{
    console.log(`Empty`);
}

// Falsy Values//
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values//
//"0", 'False', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log(`Array is Empty`);
}

const emptyObj = {}

if ((Object.keys(emptyObj)).length === 0) {
    console.log(`Object is empty`)
}

// Nullish Coalescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10/
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

//Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`lesser than 80`) : console.log(`Greater than 80`);

