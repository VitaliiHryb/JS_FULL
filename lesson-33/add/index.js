export const getMostActiveDevs = options => {
  return new Promise((resolve, reject) => {
    try {
      const { days, userId, repoId } = options;
      const date = new Date();
      date.setDate(date.getDate() - days);
      const since = date.toISOString();
      fetch(
        `https://api.github.com/repos/${userId}/${repoId}/commits?since=${since}&per_page=100`,
      )
        .then(response => response.json())
        .then(commits => {
          const contributors = commits.reduce((contributors, commit) => {
            const { name, email } = commit.commit.author;
            const { login } = commit.author;
            if (!contributors[login]) {
              // eslint-disable-next-line no-param-reassign
              contributors[login] = { count: 1, name, email };
            } else {
              // eslint-disable-next-line no-plusplus, no-param-reassign
              contributors[login].count++;
            }
            return contributors;
          }, {});
          let mostActiveDevs = Object.values(contributors);
          mostActiveDevs = mostActiveDevs.sort((a, b) => b.count - a.count);

          const max = mostActiveDevs[0].count;
          const result = mostActiveDevs.filter(dev => dev.count === max);
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

// // option 2
// export const getMostActiveDevs = options => {
//   return new Promise((resolve, reject) => {
//     try {
//       const { days, userId, repoId } = options;
//       let date = new Date();
//       date.setDate(date.getDate() - days);
//       const since = date.toISOString();
//       fetch(
//         `https://api.github.com/repos/${userId}/${repoId}/commits?since=${since}&per_page=100`,
//       )
//         .then(response => response.json())
//         .then(commits => {
//           const contributors = commits.reduce((contributors, commit) => {
//             const { name, email } = commit.commit.author;
//             const login = commit.author.login;
//             if (!contributors[login]) {
//               contributors[login] = { count: 1, name, email };
//             } else {
//               contributors[login].count++;
//             }
//             return contributors;
//           }, {});
//           let mostActiveDevs = Object.values(contributors);
//           mostActiveDevs = mostActiveDevs.sort((a, b) => b.count - a.count);

//           let max = mostActiveDevs[0].count;
//           const result = mostActiveDevs.filter(dev => dev.count === max);
//           resolve(result);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// // option 3
// const axios = require('axios');
// const moment = require('moment');

// export function getMostActiveDevs(options) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const { days, userId, repoId } = options;
//       const since = moment().subtract(days, 'days').format();
//       const commits = await axios.get(
//         `https://api.github.com/repos/${userId}/${repoId}/commits?since=${since}&per_page=100`,
//       );
//       const contributors = commits.data.reduce((contributors, commit) => {
//         const { name, email } = commit.commit.author;
//         const login = commit.author.login;
//         if (!contributors[login]) {
//           contributors[login] = { count: 1, name, email };
//         } else {
//           contributors[login].count++;
//         }
//         return contributors;
//       }, {});
//       let mostActiveDevs = Object.values(contributors);
//       mostActiveDevs = mostActiveDevs.sort((a, b) => b.count - a.count);

//       let max = mostActiveDevs[0].count;
//       const result = mostActiveDevs.filter(dev => dev.count === max);
//       resolve(result);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
