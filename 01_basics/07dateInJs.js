// Date

let myDate = new Date()
console.log(myDate); // not readable date and time
console.log(myDate.toString()); // much more readable
console.log(myDate.toDateString()); // only date with day
console.log(myDate.toISOString());  // same as first but in string
console.log(myDate.toJSON()); // same as Ist
console.log(myDate.toLocaleDateString()); // in standard format MM/DD/YYYY
console.log(myDate.toLocaleTimeString()); // in standard format HH:MM:SS AM/PM
console.log(myDate.toLocaleString()); // in standard format of MM/DD/YYYY, HH,MM,SS AM/PM
console.log(myDate.toTimeString()); //  time in standard format with timezone

console.log(typeof myDate); // by this we get output as object means date is a object 
 
// for displaying own date as output do this
let ownCreatedDate = new Date(2023, 4, 24)
let ownCreatedDate1 = new Date(2023, 4, 24, 5, 52, 35) // move further to make more detailed changes
let ownCreatedDate2 = new Date("02-25-2008") // another format for print date 
let ownCreatedDate3 = new Date("2005-04-26") // Another format for date 
console.log(ownCreatedDate.toLocaleString());
console.log(ownCreatedDate1.toLocaleString());
console.log(ownCreatedDate2.toLocaleString());
console.log(ownCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp) // it give time in miliseconds from 1970.
console.log(myDate.getTime()) // it alse gives the timestamp from the 1970 to the date which is given in it.
// It is mostly used in scorecards, hotel bookings, while comparing two dates.
// console.log(Math.floor(Date.now()/1000)); // now the miliseconds are converted to the seconds and it will be musch easier to compare the small values according to larger values.

//To get speific hour, day, date, month and anything else from the date or time
let newDate = new Date()

console.log(newDate); // normal date
console.log(newDate.getDate()); // to get the date
console.log(newDate.getDay()); // to get th day number
console.log(newDate.getMonth()); // to get the number of month
console.log(newDate.getFullYear());// to get full year


// full statement is 
console.log(`Today date is ${newDate.getDate()} and month is ${newDate.getMonth()}th and year is ${newDate.getFullYear()}, The time is ${newDate.toLocaleTimeString()}`)

let something = newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(something); // .toLocalString is work as an object to we can input many things in this like weekday, calender, hour, hour12 ( format to 12 hr) and many more things.