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
  if (c > Math.max(a, b)) {
    return -1;
  }

  let steps = 0;
  let x = 0;
  let y = 0;

  while (x !== c && y !== c) {
    if (x === 0) {
      x = a;
      steps++;
    } else if (y === b) {
      y = 0;
      steps++;
    } else {
      const diff = Math.min(x, b - y);
      x -= diff;
      y += diff;
      steps++;
    }
  }

  return steps;
}
