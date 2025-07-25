//   for loop


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`5 is best number`);
    }
    console.log(element);
}

//===================================================================================//

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop is of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop is of ${j} & outer loop is ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);  
    }
    
}

//================================================================================//

let myArray = ["Ironman", "Superman", "Spiderman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i) {
    const element = myArray[i];
    console.log(element);
}

//================================================================================//

for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        console.log(`10 detected`);
        break
    }
    console.log(`The value of i is ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        console.log(`10 detected`);
        continue
    }
    console.log(`The value of i is ${i}`);
}