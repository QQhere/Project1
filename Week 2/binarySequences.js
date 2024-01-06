/*
Week 2 - Binary sequence generation
Description
Given an integer n, write a program that generates all the binary sequences of length n in a lexicographic order.
Input
Line 1: contains an integer n (1 <= n <= 20)
Output
Write binary sequences in a lexicographic ordder, eac sequence in a line

Example
Input
3
Output
000
001
010
011
100
101
110
111

*/
function binarySequences(n) {
  let result = [];
  for (let i = 0; i < Math.pow(2, n); i++) {
    let binary = i.toString(2);
    while (binary.length < n) {
      binary = "0" + binary;
    }
    result.push(binary);
  }
  return result.join("\n");
}