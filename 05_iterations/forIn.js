  const myObj = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
   console.log(`${key} is shortcut of ${myObj[key]}`);
}

const programming = ["rb", "cpp", "js", "java", "py"]

for (const key in programming) {
   console.log(programming[key]);
    
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
   console.log(key);   // map is not iterable for 'for in' loops.
   
}
