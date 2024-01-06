/*
Solve degree-2 polynomial equation
Description
Given an equation ax^2 + bx + c = 0. Find solution to the given equation.
Input
Line 1 contains 3 integers a, b, c 
Output
Write NO SOLUTION if the given equation has no solution 
Write x0 (2 digits after the decimal point) if the given equation has one solution x0 
Write x1 and x2 with x1 < x2 (2 digits after the decimal point) if the given equation has two distinct solutions x1, x2 

Example
Input 
1 1 8
Output 
NO SOLUTION 


Input 
1 -2 1
Output
1.00

Input 
1 -7 10
Output 
2.00 5.00
*/
function solveQuadraticEquation(input) {
    let arrayInput = input.split(' ');
    let a = parseFloat(arrayInput[0]);
    let b = parseFloat(arrayInput[1]);
    let c = parseFloat(arrayInput[2]);
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "NO SOLUTION";
    } else if (delta === 0) {
        let x0 = (-b / (2 * a)).toFixed(2);
        return x0;
    } else {
        let x1 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
        let x2 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
        return x1 + " " + x2;
    }
}