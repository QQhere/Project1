/*
Add Subtract Multiplication Division of A and B
Description
Given 2 integers a and b. Compute a+b, a-b, a*b, a/b.
Input
Line 1 contains 2 integers a and b (1 <= a,b <= 1000)
Output
Write a+b, a-b, a*b, a/b  (4 integers are separated by a SPACE characters)

Example
Input
9 4

Output 
13 5 36 2
*/
function addSubtractMultiplicationDivision(input) {
    let array = input.split(' ');
    let a = parseInt(array[0]);
    let b = parseInt(array[1])
    const arr = [a+b, a-b, a*b, parseInt(a/b)];
    return arr.join(' ');
}