// For Of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World!"

for (const greet of greetings) {
   console.log(greet);
    
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it does not takes any duplicate value or repeated value

console.log(map);

for (const [key, val] of map) {
    console.log(key,":-" ,val);
}

// On object

const myObject = {
    'game1': 'Sekiro',
    'game2': 'GOT',
    'game3': 'RDR 2'
}

// for (const [key, value] of myObject) {
    console.log(key, ":-", value);
    
//}