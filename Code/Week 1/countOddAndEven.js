/*
Count odd and even number from a sequence
Description
Given a sequence of integer a1, a2, ..., an. Count the number of odd elements and even elements of the sequence.
Input
Line 1: contains a positive integer n (1 <= n <= 100000)
Line 2: contains a1, a2, ..., an. (1 <= ai <= 1000000)
Output
Write the number of odd elements and the number of even elements (separated by a SPACE character)

Example 
Input 
6
2 3 4 3 7 1
Output 
4 2
*/
// function countOddAndEven(arr) {
//   let oddCount = 0;
//   let evenCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
//   }
//   console.log(oddCount + " " + evenCount);
// }

// const n = parseInt(prompt('Nhập n:'));
// const input = prompt(`Nhập dãy ${n} số:`);
// let arr = input.split(" ").map(x => parseInt(x));
// if (arr.length !== n) {
//   console.log(`Độ dài dãy số ${arr.length} khác n đã nhập ${n}`);
// } else {
//   countOddAndEven(arr);
// }

function countOddAndEven(input) {
  let inputArray = input.split("\n");
  let n = parseInt(inputArray[0]);
  let a = inputArray[1].split(" ").map(Number);
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
return oddCount + " " + evenCount;
}