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
    let [k, n] = input.split(" ").map(Number);
    
    let C = new Array(k+1).fill().map(() => new Array(n+1).fill(0));
    for (let i = 0; i <= k; i++) {
      for (let j = 0; j <= n; j++) {
        if (i == 0 || i == j) {
          C[i][j] = 1;
        } else {
          C[i][j] = C[i - 1][j - 1] + C[i][j-1];
        }
      }
    }
    return C[k][n]%(1000000007);
  }
  