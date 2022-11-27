const baseUrl = 'https://api.github.com/users';

function getMostActiveDevs(user) {
  // some logic
  return fetch(`${baseUrl}/${user}`)
    .then(data => data.json())
    .then(data => {
      const { id, login, avatar_url } = data;
      console.log({ id, login, avatar_url });
      return [{ id, login, avatar_url }];
    });
  // return ([{ count: 5, name: 'Tom', email: 'tom@example.com' }]);
}

getMostActiveDevs('facebook');
// getMostActiveDevs({ days: 7, userId: 'userId', repoId: 'repoId' });
