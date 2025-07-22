const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is compelete');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('promise consumed!');
    
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async 2 task is compelete');
        resolve()
    }, 1000);
}).then(function(){
    console.log('promise 2 consumed!!');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: 'anubhav', email: 'anu@example.com'})
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: 'gupta', email: 'gupta@example.com'})
        }else{
            reject('ERROR: Something went wrong!!')
        }
    }, 1000);
});

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function() {
    console.log(`can't sure that the work is accepted or rejected.`);
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: 'javascript', email: 'js@example.com'})
        }else{
            reject('ERROR: js went wrong!!')
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = fetch('https:api.github.com/users/devanubhavgupta')
//         const data = response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);   
//     }
// }

// getAllUsers()

fetch('https:api.github.com/users/devanubhavgupta')
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
