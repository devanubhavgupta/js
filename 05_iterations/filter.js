const coding = ["js", "ruby", "python", "java", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);

// so we use filter

//Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nums = myNums.filter( (nums) => nums > 4 )

const nums = myNums.filter( (nums) => {
   // return nums > 4
} )

// console.log(nums);

// If we forcely want to use for each

const newNums = []

myNums.forEach( (nums) => {
    if (nums > 5) {
        newNums.push(nums)
    }
} )

// console.log(newNums);

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    latestEdition: 2015
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    latestEdition: 2021
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
    latestEdition: 2020
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937,
    latestEdition: 2018
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813,
    latestEdition: 2019
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-Fiction",
    publishYear: 2011,
    latestEdition: 2022
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
    latestEdition: 2019
  },
  {
    title: "The Name of the Wind",
    genre: "Fantasy",
    publishYear: 2007,
    latestEdition: 2021
  },
  {
    title: "The Road",
    genre: "Dystopian",
    publishYear: 2006,
    latestEdition: 2020
  }
];

// const userBooks = books.filter( (reqBooks) => reqBooks.genre == "Fantasy" )

const userBooks = books.filter( (reqBooks) => { 
    return reqBooks.publishYear < 2000 && reqBooks.genre == "Fiction"
} )

console.log(userBooks);


