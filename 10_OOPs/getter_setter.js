class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}annubhav`;
  }
  set password(value) {
    this._password = value;
  }
}

const anubhav = new User('a@google.com', 'abcdef');

console.log(anubhav.email);
