const myNums = [1, 2, 3]

// const total = myNums.reduce( function (acc, curr) {
//     console.log(`The acc: ${acc}  and currVal: ${curr}`);
//     return acc + curr
// },0 )

const total = myNums.reduce( (acc, currVal) => (acc + currVal), 0 )

console.log(total);

const shoppingCart = [
  { "courseName": "Web Development Bootcamp", "price": 199.00 },
  { "courseName": "Python for Data Science", "price": 149.00 },
  { "courseName": "UI/UX Design Fundamentals", "price": 129.00 },
  { "courseName": "Cloud Computing with AWS", "price": 159.00 }
]
 
const totalPrice = shoppingCart.reduce( ( acc ,item) => (acc + item.price), 0)

console.log(totalPrice);

