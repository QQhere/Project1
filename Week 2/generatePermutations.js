/*
Permutation generation
Description
Given an integer n, write a program to generate all permutations of 1, 2, ..., n in a lexicalgraphic order (elements of a permutation are separated by a SPACE character).
Example
Input 
3
Output
1 2 3 
1 3 2 
2 1 3 
2 3 1 
3 1 2 
3 2 1 

*/
function generatePermutations(input) {
  let n = parseInt(input);
  let result = [];
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  permute(nums, 0, n - 1, result);
  let answ = [];
  for (let i = 0; i < result.length; i++) {
    answ.push(result[i].join(' '));
  }
  return answ.join("\n");
}

function permute(nums, l, r, result) {
  if (l == r) {
    result.push(nums.slice());
  } else {
    for (let i = l; i <= r; i++) {
      swap(nums, l, i);
      permute(nums, l + 1, r, result);
      swap(nums, l, i);
    }
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(generatePermutations(5));