'use strict';

/**
 * @return {object}
 */

// createLogger
// input: -
// output: object (of methods)

// createMessage
// input: (string, string) - message and type
// output: object (message, dateTime, type)

// warn/error/log
// input: (string) - message
// output: -

// getRecords
// input: (string) - type
// output: array

// memory === array
// type => 'warn', 'error' , 'log'
// format: { message: *message text*, dateTime: *time message was sent*, type: *message type* }
// dateTime <= use new Date() === current time
// getRecords(type) return [{ message: *message text*, dateTime: *time message was sent*, type: *message type* }, ...]
// if getRecords() => return messagers all type, else return message with needet type
// sort by data Time from big to small

const createLogger = () => {
  const messages = [];

  function createMessage(messageText, messageType) {
    return {
      message: messageText,
      dateTime: new Date(),
      type: messageType,
    };
  }

  function warn(messageText) {
    const message = createMessage(messageText, 'warn');
    messages.push(message);
  }

  function error(messageText) {
    const message = createMessage(messageText, 'error');
    messages.push(message);
  }

  function log(messageText) {
    const message = createMessage(messageText, 'log');
    messages.push(message);
  }

  function getRecords(type) {
    let records;
    if (type) {
      records = messages.filter(message => message.type === type);
    } else records = [...messages];

    return records.sort((messege1, messege2) => messege2.dateTime - messege1.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

export { createLogger };
