// console.log(`Hello Brother!`)

// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Captain America", "Spiderman", "Thor"] // array can also strore the strings as well as integers, boolean etc

const myArr2 = new Array(0, 1, 2, 3, 4, 5) // another way to define array in js
// console.log(myArr); // Array is way to store the different type of data in a single variable 
// console.log(myArr[2]) // access the array by the index number of the array (index are start from 0 in arrays)
// In javascript, array-copy-operation create shallow copies (shallow copies of object are those copy whose properties shares the same references, Deep copies of object are those copy whose properties do not shares the references )
// console.log(myHeros.length); // it is used to get the length of array.

// Array Methods

// myArr.push(6) // used to add a new element in the last of the array 
// myArr.pop() // remove the last element from the last of the array

// myArr.unshift(9) // add the element in thr top of the array
// myArr.shift() //  remove the first element from the top of the array
 
// console.log(myArr.includes(9)); // gives the output in the boolean form, an is used to know that he element is present in array or not.
// console.log(myArr.indexOf(5)); // gives the index number, used to know the index no. of element.

// const newArr = myArr.join() // Add all the element of an array into a String

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", (myArr));

const myn1 = myArr.slice(1,4) // in this the last range will not included, and the changes will not intilized in the original array

console.log("Slice:", (myn1));
console.log("B", (myArr));

const myn2 = myArr.splice(1,4) // in this the last range will be included, and the changes will initilized in the original array

console.log("Splice:", (myn2));
console.log("C", (myArr)); // as we can see the original array is changed.