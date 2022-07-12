/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(({ name }) => name);
  }

  getUserIds() {
    return this.users.map(({ id }) => id);
  }

  getUserNameById(userId) {
    const user = this.users.find(({ id }) => id === userId);
    return user ? user.name : null;
  }
}
// class User {
//   constructor(id, name, sessionId) {
//     this._id = id;
//     this._name = name;
//     this._sessionId = sessionId;
//   }
// }

// class UserRepository {
//   constructor(users) {
//     this._users = Object.freeze(users);
//   }

//   getUserNames() {
//     return this._users.map(({ _name }) => _name);
//   }

//   getUserIds() {
//     return this._users.map(({ _id }) => _id);
//   }

//   getUserNameById(userId) {
//     const user = this._users.find(({ _id }) => _id === userId);
//     return user ? user._name : null;
//   }
// }

// export { User, UserRepository };

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
user.name = 'Bob';
console.log(user.name);
