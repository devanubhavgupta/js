// let myName = "anubhav     "
// let mychannel = "coffee     "

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman'];

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.name = function () {
  console.log(`anubhav is present in all objects`);
};

Array.prototype.sayMyName = function () {
  console.log(`anubhav says hello`);
};

// heroPower.name()
// myHeros.name()
// myHeros.sayMyName()
// heroPower.sayMyName()

// inheritance

const User = {
  name: 'chai',
  email: 'chai@google.com',
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = 'ChaiAurCode     ';

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
'anubhav'.trueLength();
'iceTea'.trueLength();
