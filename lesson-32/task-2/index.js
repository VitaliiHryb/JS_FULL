// Гонка промисов

// const servers = {
//   'https://server.com/us',
//   'https://server.com/eu',
//   'https://server.com/au',
// }

// ==> // const servers = [
//   'https://server.com/us/users/userid',
//   'https://server.com/eu/users/userid',
//   'https://server.com/au/users/userid',
// ];

const getRandomNumbers = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumbers(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au',
];

const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));
