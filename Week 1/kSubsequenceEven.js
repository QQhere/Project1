/*
k-Subsequence even
Description
Given a sequence of integers a1, a2, . . ., an. A k-subsequence is define to be a sequence of k consecutive elements: ai, ai+1, . . ., ai+k-1. The weight of a k-subsequence is the sum of its elements.
Given positive integers k and m. Compute the number Q of k-subsequences such that the weight is even.
Input
Line 1: contains 2 positive integers n, k (1 <= n <= 100000, 1 <= k <= n/2)
Line 2: contains a1, a2, . . ., an. (1 <= ai <= 10000)
Output
Write the value Q
Example
Input
6 3
2 4 5 1 1 2 
Output
2
*/

function kSubsequenceEven(input) {
    let inputArray = input.split("\n");
    let nk = inputArray[0].split(' ');
    let n = parseInt(nk[0]);
    let k = parseInt(nk[1]);
    let arr = inputArray[1].split(" ").map(Number);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (sum % 2 == 0) {
        count++;
    }
    
    for (let i = 0; i < n - k; i++) {
        sum = sum - arr[i] + arr[i + k];
    
        if (sum % 2 == 0) {
            count++;
        }
    }
    return count;
}
