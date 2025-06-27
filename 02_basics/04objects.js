// // const tinderUser = new Object() // singleton way to declare a object

const tinderUser = {} // non-singleton way to declare a object

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false 

console.log(tinderUser);

const regularUser = {
    email: "a@gmail.com",
    personalInfo: {
        username: "anubhav82",
        name: {
            firstName: "Anubhav",
            lastName: "Gupta",
        },
    },
}
// //  we can also use nested objects in the javascipt programs
console.log(regularUser.personalInfo.name.firstName); 

// // merge two objects
const obj1 = {1:"A", 2:"B", 3:"C"}
const obj2 = {4:"A", 5:"B", 6:"C"}

// // const obj3 = { obj1, obj2 } // wrong way to merge two objects
// // const obj3 = Object.assign(obj1, obj2) // correct way to merge objects

const obj3 = {...obj1, ...obj2} // the legendry spread method to merge two or more objects

console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "a@google.com"
    },
    {
        id: 3,
        email: "a@google.com"
    },
    {
        id: 4,
        email: "a@google.com"
    }
]

console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser)) // to get only keys as output
console.log(Object.values(tinderUser)) // to get values as output
console.log(Object.entries(tinderUser)) // to get all the inner objects as arrays

console.log(tinderUser.hasOwnProperty('isLoggedout')); // tp check that the key is present in the object orr not 



const course ={
    courseName: "JS in Hindi",
    courseFee: 999,
    courseInstructor:"Hitesh",
}

// course.courseInstructor

// when we have to call the object's keys again and again, so the code dont look messy we use the method
//(Object-destructuring)
const {courseInstructor: teacher} = course 
const {courseFee: fees} = course

console.log(teacher);
console.log(fees);


// json
// {
//     "name": "Anubhav",
//     "courseName": "B.Tech",
//     "Branch": "CSE" 
// }


// to understand any json we use json formatter