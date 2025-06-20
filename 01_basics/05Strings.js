const name = "Anubhav"
const age = 20

// console.log(name + age + "year old")
// it is the old method of concat any strings

console.log(`Hey! My name is ${name}. I'm ${age} year old. `)
// this is the new and perfect way to concat any stings with any other strings.

const newName = new String('Anubhavgupta')

console.log(newName[5]) //basically it tells the character which is present on that index nummber.

console.log(newName.length) // this prototype is used to get the length of the string which is passed in the variable.

console.log(newName.toUpperCase()) // this prototype convert the whole string into the capital characters or in uppercase.

console.log(newName.charAt(8)) //it is used to get the character which is used on the index place which is given in the charAt place.

console.log(newName.indexOf('g')) // it gives the index of that char which is given as input by developer.

let hero = "Iron-man"

const newHero = hero.substring(0,4) // it follows the rule like variable.substring(startIndex, endIndex), and ending index will never added to the output. (MAKE SURE THAT IN JAVASCRIPT THE INDEX ARE START WITH 0)
console.log(newHero); 

const anotherHero = hero.slice(-7,4) // it is same as substring but in this we can pass the negative index number and that index number will start from last of the string
console.log(anotherHero);

const anotherNewHero = "            Captain-America               "
console.log(anotherNewHero.trim()); // when the user knowingly or unknownly put many spaces then trim() function cut and remove all the spaces from the string.

const url = "https://anubhav.com/anubhav%20gupta/"
console.log(url.replace('%20', '-')); // in output as we can see the '%20' is replaced by the hyphen, so this property is used to replace the character from the srtings.

console.log(url.includes('anubhav'));
console.log(url.includes('developer')); // include() function is used to get the output that the string is present in the sting or not if it is present then it'll give the value as true, else false.

const fruits = "Apple, Banana, Papaya, Guava, Grapes, Mango, Kiwi"
console.log(fruits.split(',', 4)); // if for some reasons we want to convert any sting to a array on the basis of any thing or any spaces, comma then we can convert it till a limit also the syntax is split(seprator, limit)