/*
Convert hh:mm:ss to seconds
Description
Given a time moment which is a string under the format hh:mm:ss (in which hh (0 <= hh <= 23) is the hour, mm (0 <= mm <= 59) is the minute, and ss (0 <= ss <= 59) is the second). Convert this time moment in seconds (result = hh*3600 + mm*60 + ss).
Input
Line 1: contains a string s representing the time moment.  
Output
if s is not under the format hh:mm:ss, then write INCORRECT. Otherwise, write value converted.

Example
Input
13:05:26

Output
47126


Input
13:05:6

Output
INCORRECT 

Input
13:05 26

Output
INCORRECT
*/
function convertToSeconds(timeString) {
    let status = 1;
    let check = ':';
    let subStrings = [];
    let subString = '';
    let count = 0;
    for (let c of timeString) {
        if (c === check) {
            subStrings.push(subString);
            subString = '';
            count++;
        } else {
            subString += c;
        }
    }
    subStrings.push(subString);
    if (count !== 2) {
        return "INCORRECT";
    } else {
        for (let str of subStrings) {
            if (str.length !== 2) {
                status = 0;
                break;
            }
            for (let c of subString) {
                if (isNaN(c)) {
                    status = 0;
                    break;
                }
            }
        }
        let hour = parseInt(subStrings[0]);
        let minutes = parseInt(subStrings[1]);
        let second = parseInt(subStrings[2]);
        if (hour < 0 || hour > 23 || minutes < 0 || minutes > 59 || second < 0 || second > 59) {
            status = 0;
        }
        if (status === 0) {
            return "INCORRECT";
        } else {
            return hour*3600 + minutes*60 + second;
        }
    }
}