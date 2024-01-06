/*
Basic queries on array
Description
Given a sequence of integers a1, a2, ..., an. Perform a sequence of queries over this sequence including:
find-max: return the maximum element of the given sequence
find-min: return the minimum element of the given sequence 
sum: return the sum of the elements of the given sequence 
find-max-segment i j: return the maximum element of the subsequence from index i to index j (i <= j)

Input
The first block contains the information about the given sequence with the following format:
Line 1: contains a positive integer n (1 <= n <= 10000)
Line 2: contains n integers a1, a2, ..., an (-1000 <= ai <= 1000)
The first block is terminated by a character *
The second block contains a sequence of queries defined above, each query is in a line. The second block is terminated a 3 characters ***

Output
Write the result of each query in a corresponding line
xample
Input
5
1 4 3 2 5
*
find-max
find-min
find-max-segment 1 3
find-max-segment 2 5
sum
***

Output
5
1
4
5
15

*/

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function findMaxSegment(arr, i, j) {
    return Math.max(...arr.slice(i, j + 1));
}

function queriesOnArray(input) {
    let inputArray = input.split("\n");
    let n = parseInt(inputArray[0]);
    let arr = inputArray[1].split(" ").map(Number);
    let queries = inputArray.slice(3, inputArray.length - 1);
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        if (query === "find-max") {
            answer.push(findMax(arr));
        } else if (query === "find-min") {
            answer.push(findMin(arr));
        } else if (query === "sum") {
            answer.push(sum(arr));
        } else if (query.startsWith("find-max-segment")) {
            let [_, i, j] = query.split(" ");
            answer.push(findMaxSegment(arr, parseInt(i), parseInt(j)));
        }
    }
    return answer.join('\n');
}