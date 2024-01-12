/*
Sum Array
Description
Given a sequence of integers a1, a2, ..., an. Compute the sum Q of elements of this sequence.
Input
Line 1: contains n (1 <= n <= 1000000)
Line 2: contains a1, a2, ..., an (-10000 <= ai <= 10000)
Output
Write the value of Q
Example
Input
4
3 2 5 4
Output
14
*/

function sumArray(input) {
  let inputArray = input.split("\n");
  let n = parseInt(inputArray[0]);
  let arr = inputArray[1].split(" ").map(Number);
  return arr.reduce((a, b) => a + b, 0);
}

// let n = parseInt(prompt("Nhập số phần tử của mảng"));
// let input = prompt("Nhập các phần tử của mảng, cách nhau bởi dấu cách:");
// let arr = input.split(" ").map(Number);
// if (arr.length !== n) {
//   console.log(`Số phần tử trong mảng là ${arr.length}, khác số phần tử đã khai báo ${n}`);
// } else {
//   console.log(`Tổng các phần tử trong mảng là: ${sumArray(arr)}`);
// }
