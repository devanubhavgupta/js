const coding = ["js", "ruby", "python", "java", "cpp"]

coding.forEach( function (item) {
   console.log(item);
})

coding.forEach( (langs) => {
   console.log(langs);
})

function printme(item) {
   console.log(item);
}

coding.forEach(printme)

// Also Contain

coding.forEach((item, index, arr) => {
   console.log(item, index, arr);
})

const myCoding = [
    {
        name: "javascript",
        extension: "js"
    },
    {
        name: "java",
        extension: "java"
    },
    {
        name: "C++",
        extension: "cpp"
    },
    {
        name: "Python",
        extension: "Py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.extension);
} )