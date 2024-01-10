/*
WATER JUGS
Description
There are two jugs, a-litres jug and b-litres jug (a, b are positive integers). There is a pump with unlimited water. Given a positive integer c, how to get exactly c litres.
Input
   Line 1: contains positive integers a,   b,  c  (1 <= a, b, c <= 900)
Output
  write the number of steps or write -1 (if no solution found)
Example

Input
6  8  4
Output
4
*/
function waterJugs(input) {
  let inputArray = input.split(' ').map(Number);
  let a = inputArray[0];
  let b = inputArray[1];
  let c = inputArray[2];
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

if (c > b)
    return -1;

if ((c % gcd(b, a)) !== 0)
    return -1;

return Math.min(pour(b, a, c), pour(a, b, c));
}

function gcd(a, b) {
  if (b === 0)
      return a;
  return gcd(b, a % b);
}

function pour(fromJug, toJug, target) {
  let from = fromJug;
  let to = 0;
  let step = 1;

  while (from !== target && to !== target) {
      let temp = Math.min(from, toJug - to);

      to += temp;
      from -= temp;
      step++;

      if (from === target || to === target)
          break;

      if (from === 0) {
          from = fromJug;
          step++;
      }

      if (to === toJug) {
          to = 0;
          step++;
      }
  }
  return step;
}