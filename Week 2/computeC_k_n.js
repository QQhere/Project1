/*
Compute C_k_n
Description
Given two positive integers k and n. Compute C(k,n) which is the number of ways to select k objects from a given set of n objects.
Input
Line 1: two positive integers k and n (1 <= k,n <= 999)
Output
Write te value C(k,n) modulo 10
9
+7.
Example
Input
3  5
Output
10
*/
function computeC_k_n(input) {
    let [k, n] = input.trim().split(" ").map(Number);
    let MOD = 1e9 + 7;
    let C = Array.from(Array(n+1), () => new Array(k+1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, k); j++) {
            if (j == 0 || j == i) {
                C[i][j] = 1;
            } else {
                C[i][j] = (C[i-1][j-1] + C[i-1][j]) % MOD;
            }
        }
    }

    return C[n][k];
}

const input = `500 999`
console.log(computeC_k_n(input)); 