export const reverseArray = arr => (Array.isArray(arr) ? [...arr].reverse() : null);

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  return balances[clientIndex] >= amount ? (balances[clientIndex] -= amount) : -1;
};

export const getAdults = obj => {
  let filterObj = {};
  const isAdult = old => old >= 18;

  for (const key in obj) {
    if (isAdult(obj[key])) {
      filterObj[key] = obj[key];
    }
  }
  return filterObj;
};
