/*
Bank Transaction
Description
The data about bank transactions consists of a sequence of transactions: the information of each transaction has the following format:
                                                                    <from_account>   <to_account>   <money>   <time_point>   <atm>
In which:
•	<from_account>: the account from which money is transferred (which is a string of length from 6 to 20 )
•	<to_account>: the account which receives money in the transaction (which is a string of length from 6 to 20)
•	<money>: amount of money transferred in the transaction (which is an integer from 1 to 10000)
•	<time_point>: the time point at which the transaction is performed, it is a string under the format HH:MM:SS  (hour: minute: second)
•	<atm>: the code of the ATM where the transaction is taken (a string of length from 3 to 10)
Example: T00112233445 T001234002 2000 08:36:25 BIDV (at the ATM BIDV, account T00112233445 transfers 2000$ to account T001234002 at time point 08:36:25 (08 hour, 36 minutes, 25 seconds) 
A transaction cycle of length k starting from account a1 is defined to be a sequence of distinct account a1, a2, …, ak  in which there are transactions from account a1 to a2, from a2 to a3, …, from ak to a1.
Write a program that process the following queries: 
?number_transactions: compute the total number of transactions of the data
?total_money_transaction: compute the total amount of money of transactions  
?list_sorted_accounts: compute the sequence of bank accounts (including sending and receiving accounts) appearing in the transaction (sorted in an increasing (alphabetical) order)  
?total_money_transaction_from <account>: compute the total amount of money transferred from the account <account>  
?inspect_cycle <account> k : return 1 if there is a transaction cycle of length k, starting from <account>, and return 0, otherwise
Input (stdin)
The input consists of 2 blocks of information: the data block and the query block
•	The data block consists of lines:
o	Each line contains the information about a transaction described above
o	The data is terminated by a line containing #
•	The query block consists of lines:
o	Each line is a query described above
o	The query block is terminated by a line containing #

Output (stdout)
•	Print to stdout (in each line) the result of each query described above

Example
Input
T000010010 T000010020 1000 10:20:30 ATM1
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
#
Output
9
19500
T000010010 T000010020 T000010030 T000010040
4500
1
*/

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


const input = `T000000011 T000000009 2602 21:02:45 atm2
T000000014 T000000009 3148 05:51:23 atm6
T000000001 T000000014 9466 22:47:26 atm3
T000000008 T000000012 3005 22:54:48 atm1
T000000005 T000000013 4974 18:37:21 atm3
T000000012 T000000005 5482 15:30:33 atm6
T000000008 T000000006 7586 10:40:48 atm3
T000000009 T000000011 3086 13:32:30 atm5
T000000009 T000000002 10364 07:16:11 atm3
T000000007 T000000011 3083 13:52:56 atm3
T000000010 T000000010 8858 22:22:09 atm4
T000000006 T000000002 1587 11:49:47 atm3
T000000009 T000000003 4044 08:45:21 atm2
T000000008 T000000003 3255 18:39:23 atm2
T000000010 T000000008 7732 22:30:38 atm6
T000000007 T000000004 5727 20:44:47 atm3
T000000009 T000000005 2410 18:39:03 atm6
T000000005 T000000003 4827 12:45:58 atm4
T000000014 T000000005 9572 16:12:34 atm3
T000000007 T000000013 1528 09:06:13 atm6
T000000015 T000000010 6949 14:14:07 atm3
T000000007 T000000009 8679 14:44:21 atm2
T000000007 T000000011 2549 17:10:08 atm4
T000000013 T000000015 3738 16:38:01 atm2
T000000015 T000000012 10834 18:37:31 atm2
T000000011 T000000002 8128 23:54:18 atm4
T000000015 T000000013 1252 09:45:10 atm3
T000000012 T000000007 4531 15:05:02 atm4
T000000011 T000000013 1078 16:03:54 atm1
T000000012 T000000003 9343 17:02:55 atm2
T000000012 T000000013 2308 18:38:35 atm1
T000000001 T000000011 3317 13:19:30 atm4
T000000010 T000000004 8864 13:31:35 atm5
T000000011 T000000015 2688 10:13:58 atm6
T000000005 T000000009 1721 22:26:26 atm6
T000000014 T000000009 3639 01:41:33 atm3
T000000009 T000000014 4349 11:09:04 atm2
T000000011 T000000008 3028 23:17:32 atm3
T000000007 T000000006 9309 14:18:48 atm5
T000000011 T000000003 9476 17:00:41 atm5
#
?inspect_cycle T000000009 6
?inspect_cycle T000000012 3
?inspect_cycle T000000010 5
?inspect_cycle T000000005 3
?inspect_cycle T000000015 4
?inspect_cycle T000000007 3
?inspect_cycle T000000008 4
?inspect_cycle T000000005 5
?inspect_cycle T000000010 6
?inspect_cycle T000000010 4
?inspect_cycle T000000012 2
?inspect_cycle T000000010 6
?inspect_cycle T000000007 3
?inspect_cycle T000000004 4
?inspect_cycle T000000009 3
#
`;

const output = processBankTransactions(input);
console.log(output);
