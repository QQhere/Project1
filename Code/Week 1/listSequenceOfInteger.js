/*
List sequence of integer having 3 digits divisible by n
Description
Given a positive integer n, find all integer having 3 digits which is divisible by n.
Input
Line 1: contains a positive integer n (1 <= n <= 999)
Output
Write the sequence of numbers found (elements are separated by a SPACE character)

Example
Input 
200

Output 
200 400 600 800
*/
function listSequencOfInteger(input) {
    let n = parseInt(input);
    const arr = [];
    let i = 100;
    while (i < 1000) {
        if ( i%n === 0 ) {
            arr.push(i);
        }
        i++;
    }
    return arr.join(" ");
}