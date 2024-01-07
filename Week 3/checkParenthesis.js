/*
Check Parenthesis
Description
Given a string containing only characters (, ), [, ] {, }. Write a program that checks whether the string is correct in expression.
Example
 ([]{()}()[]): correct
 ([]{()]()[]): incorrect
Input
One line contains the string (the length of the string is less than or equal to $10^6$)One line contains the string (the length of the string is less than or equal to 10
6
)
Output
Write 1 if the sequence is correct, and write 0, otherwise
Example
Input
(()[][]{}){}{}[][]({[]()})
Output
1
*/
function checkParenthesis(input) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (pairs[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (pairs[stack.pop()] !== char) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
