// Immediately Invoked Function Expression (IIFE)
// It is a function that you define and run right away.It's useful when you want to do something quickly and keep your code safe from outside changes.
(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO BY ${name}`);
})("anubhav")