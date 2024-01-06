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
    let wordCount = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ' || text[i] === '\n' || text[i] === '\t') {
            wordCount++;
        }
    }

    return wordCount + 1;
}