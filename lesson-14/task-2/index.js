'use strict';

/**
 * @return {object}
 */

const createMessenger = () => {
  let message = 'Just learn it';
  let name;
  let sender = 'Gromcode';

  // Hello, Anna! Just learn it! This message was sent by Gromcode
  function sendMessage(nam) {
    name = nam;
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(sentIt) {
    sender = sentIt;
  }

  // console.log(`Hello, ${name} ${message}! This message was sent by ${sender}`);

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

// export default createMessenger;

// examples
const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna

// messeger

// const createMesseger = () => {
//   let message = 'Hi!';

//   function sendMessage(name) {
//     const sender = 'Your Gromcode';
//     console.log(`${name}, ${message} ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//   };
// };

// const messeger1 = createMesseger();
// messeger1.sendMessage('Bob');

// const messeger2 = createMesseger();
// messeger2.sendMessage('Tom');

// messeger2.setMessage('Hello!');
// messeger1.sendMessage('Ann');
