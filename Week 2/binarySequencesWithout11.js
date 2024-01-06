/*
Binary sequences generation without consecutive 11
Description
Given an integer n, write a program that generates all binary sequences without consecutive 11 in a lexicographic order.
Input
Line 1: contains an integer n (1 <= n <= 20)
Output
Write binary sequences in a lexicographic order, each sequence in a line
Example
Input
3
Output
000
001
010
100
101
*/
function binarySequencesWithout11(n) {
  let result = [];
  for (let i = 0; i < Math.pow(2, n); i++) {
    let binary = i.toString(2);
    while (binary.length < n) {
      binary = "0" + binary;
    }
    if (!binary.includes("11")) {
      result.push(binary);
    }
  }
  return result.join("\n");
}