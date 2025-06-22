// console.log(`Hello Bhailog!!!`)

const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["superman", "flash", "Batman"]
const indian = ["Bheem", "naagraj", "Shaktiman"]

marvelHeros.push(dcHeros) // wrong way to add two array

console.log(marvelHeros);
console.log(marvelHeros[3][2]); // way to lookout the elements which are inside of array's array

const herosUnited = marvelHeros.concat(dcHeros,indian) // good way to add or merge two or more arrays
console.log(herosUnited);

const allheros = [...marvelHeros, ...dcHeros, ...indian] //this method is known as spread way, it is also a fair way to merge two or more arrays
console.log(allheros);

const series = ["DARK", "GOT", "Stranger things",["Dictator", "Boys", "Wednesday", ["Spiderman", "Moonnight", "Ironman"]]]
console.log(series.flat(Infinity)); // .flat is used to merge all the arrays and which are inside of each other and gives a new array.


console.log(Array.isArray("Anubhav")); // .isArray is used to know that the content is array or not, it gives output in the boolean
console.log(Array.from("Anubhav")) // .from is used to convert any sting to the array 

let score1 = 100
let score2 = 98
let score3 = 99

console.log(Array.of(score1, score2, score3)) // .of Returns a new array from a set of elements.







