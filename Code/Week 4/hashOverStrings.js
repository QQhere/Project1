/*
Hash Over Strings
Description
Given a string s[1…k] which is a sequence of characters taken from {‘a’, . . ., ‘z’}. Given a positive integer m, the hash code of s is defined by the formula:
H(s) =  (s[1]*256
k-1
 + s[2]*256
k-2
 + . . . + s[k]*256
0 
) mod m  (the contant integer m is a parameter)
Given a sequence of strings k1, k2, …, kn, compute the corresponding hash codes
Input
Line 1: n and m (1 <= n,m <= 100000)
Line i+1 (i = 1,2,…,n): contains the string ki (the length of each string is less than or equal to 200)
Output
Each line contains the corresponding hash code of n given strings
Example
Input
4 1000
a
ab
abc
abcd
Output
97
930
179
924
*/
function hash(s, m) {
  let k = s.length;
  let h = 0;
  for (let i = 0; i < k; i++) {
    h += s.charCodeAt(i) * Math.pow(256, k - i - 1);
  }
  return h % m;
}
function hashOverStrings(input) {
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let arr = [];
    for (let i = 1; i < inputArray.length; i++) {
        arr.push(hash(inputArray[i], m));
    }
    return arr.join('\n');
}
const input = `5 10
hq
h
meayl
l
dxf`;
console.log(hashOverStrings(input));