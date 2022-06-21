function withdraw(clients, balances, client, amount) {
    const indexOfPerson = clients.indexOf(client);
    let balance = balances[indexOfPerson];
    if (balance >= amount) {
        balance -= amount;
        return balance;
    }
    if (balance <= amount) {
        balance -= amount;
        return -1;
    }
}
/* --- alternative --- */
/*const withdraw = (clients, balances, client, emount) => {
    let newBalance = balances.slice();
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) {
            if (balances[i] < emount) {
                return -1;
            } else {
                balances[i] -= emount;
                newBalance[i] = balances[i];
            }
        }
    }
    return newBalance;
};*/