const user = {
  username: 'anubhav',
  loginCount: 0,
  signedIn: true,

  getUserDetails: function () {
    // console.log('Got user details from DB');
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User('anubhav', 0, false);
const userTwo = new User('chai', 12, true);

console.log(userOne);
console.log(userTwo);
