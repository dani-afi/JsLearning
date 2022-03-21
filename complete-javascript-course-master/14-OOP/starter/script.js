'use strict';
// class Account {
//   //Public fields
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     //Protected property
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   //Public interface

//   getMovements() {
//     return this._movements;
//     return this;
//   }
//   deposit(val) {
//     this._movements.push(val);
//     return this;
//   }
//   withdrawl(val) {
//     this.withdrawl(val);
//     return this;
//   }
//   _approveLoan(val) {
//     return true;
//     return this;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.deposit;

// //Bad practice
// acc1._movements.push(250);
// acc1._movement;

// //Good practice

// acc1.deposit(250);
// acc1.withdrawl(140);
// aac1.requestLoan(1000);
// acc1._approveLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);
// console.log(acc1.pin);

// //Public fields
// //Private fields
// //Public mothods
// //Private methods

//challenge nr.4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);
