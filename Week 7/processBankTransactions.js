function processBankTransactions(input) {
    const data = input.split('\n');
    const transactions = [];
    let i = 0;
    while (data[i] !== '#') {
        transactions.push(data[i].split(' '));
        i++;
    }
    i++;
    const queries = [];
    while (data[i] !== '#') {
        queries.push(data[i]);
        i++;
    }
    let result = '';
    for (const query of queries) {
        if (query === '?number_transactions') {
            result += numberTransactions(transactions) + '\n';
        } else if (query === '?total_money_transaction') {
            result += totalMoneyTransaction(transactions) + '\n';
        } else if (query === '?list_sorted_accounts') {
            result += listSortedAccounts(transactions) + '\n';
        } else if (query.startsWith('?total_money_transaction_from')) {
            const account = query.split(' ')[1];
            result += totalMoneyTransactionFrom(transactions, account) + '\n';
        } else if (query.startsWith('?inspect_cycle')) {
            const [account, k] = query.split(' ').slice(1);
            result += inspectCycle(transactions, account, parseInt(k)) ? '1\n' : '0\n';
        }
    }
    return result;
}

function numberTransactions(transactions) {
    return transactions.length;
}

function totalMoneyTransaction(transactions) {
    let total = 0;
    for (const transaction of transactions) {
        total += parseInt(transaction[2]);
    }
    return total;
}

function listSortedAccounts(transactions) {
    const accounts = new Set();
    for (const transaction of transactions) {
        accounts.add(transaction[0]);
        accounts.add(transaction[1]);
    }
    return [...accounts].sort().join(' ');
}

function totalMoneyTransactionFrom(transactions, account) {
    let total = 0;
    for (const transaction of transactions) {
        if (transaction[0] === account) {
            total += parseInt(transaction[2]);
        }
    }
    return total;
}

function inspectCycle(transactions, account, k) {
    const visited = new Set();
    return dfs(account, account, k, visited, transactions);
}

function dfs(start, current, k, visited, transactions) {
    if (k === 0) {
        return start === current;
    }
    visited.add(current);
    for (const transaction of transactions) {
        if (transaction[0] === current && !visited.has(transaction[1])) {
            if (dfs(start, transaction[1], k - 1, visited, transactions)) {
                return true;
            }
        }
    }
    visited.delete(current);
    return false;
}
const input = `T000010010 T000010020 1000 10:20:30 ATM1
T000010010 T000010030 2000 10:02:30 ATM2
T000010010 T000010040 1500 09:23:30 ATM1
T000010020 T000010030 3000 08:20:31 ATM1
T000010030 T000010010 4000 12:40:00 ATM2
T000010040 T000010010 2000 10:30:00 ATM1
T000010020 T000010040 3000 08:20:31 ATM1
T000010040 T000010030 2000 11:30:00 ATM1
T000010040 T000010030 1000 18:30:00 ATM1
#
?number_transactions
?total_money_transaction
?list_sorted_accounts
?total_money_transaction_from T000010010
?inspect_cycle T000010010 3
#`;

const output = processBankTransaction(input);
console.log(output);
