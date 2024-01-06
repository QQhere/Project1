/*
List all numbers from 1 to n and its squares
Description
Given an integer n, print numbers from 1 to n and its squares.
Input
Line 1: contains a positive integer n (1 <= n <= 100)
Output
Each line i (i = 1,...,n): contains i and i^2 (elements are separated by one SPACE character)

Example
Input
3
Output
1 1
2 4
3 9
*/

function listNumbersAndSquares(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i-1] = `${i} ${i*i}`;
    }
    return arr.join('\n');
}
