/*
Count words
Description
Given a Text, write a prorgam to count the number Q of words (ignore characters SPACE, TAB, LineBreak) of this Text

Input
The Text

Output
Write the number Q of words

Example
Input
Hanoi University Of Science and Technology
School of Information and Communication Technology

Output
12
*/

function countWords(text) {
    let words = text.replace(/\s+/g, ' ').trim().split(' ');
    return words.length;
}
var text = `In working with our clients in the financial industry, we have discovered many recurring themes that increase the odds of success in SME lending. 

Using four building blocks—strategy,    process, analytics, and operating model—these banks create unique models for profitable growth in this new landscape.
`
console.log(countWords(text));