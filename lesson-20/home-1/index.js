'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type) {
    this.id = `${Math.random()}`;
    this.price = price;
    this.city = city;
    this.type = type;

    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
  }

  checkPrice() {
    if (this.price > 100) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType(Buy, Sell) {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

// console.log(wallet1.getBalance());
// wallet1.deposit(45);
// console.log(wallet1.getBalance());
// wallet1.withdraw(34);
// console.log(wallet1.getBalance());
// wallet1.withdraw(134);
// console.log(wallet1.getBalance());
