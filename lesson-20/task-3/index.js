'use strict';

// Wallet
// export { Wallet };

class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('No enough funds');
      return;
    }

    this.#balance -= amount;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(45);
console.log(wallet1.getBalance());
wallet1.withdraw(34);
console.log(wallet1.getBalance());
wallet1.withdraw(134);
console.log(wallet1.getBalance());

// console.log(wallet1.#balance());
