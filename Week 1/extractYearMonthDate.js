/*
Extract Year, Month, Date from a String YYYY-MM-DD
Description
Given a date which is a string under the format YYYY-MM-DD (in which YYYY is the year, MM is the month (the month í from 1 to 12), and DD is the date (the date is from 1 to 31)). Extract the year, month and date.
Input
Line 1: contains a string s  
Output
if s is not under the format YYYY-MM-DD, then write INCORRECT. Otherwise, write year, month, and date separated by a SPACE character

Example
Input
2023-10-04
Output
2023 10 4


Input
2023-10-4
Output
INCORRECT 

Input
2023-10 04
Output
INCORRECT
*/

function extractYearMonthDay(line) {
    let status = 1;
    let check = '-';
    let subStrings = [];
    let subString = '';
    let count = 0;
    for (let c of line) {
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
            if (str.length < 2) {
                status = 0;
                break;
            }
            for (let c of str) {
                if (isNaN(c)) {
                    status = 0;
                    break;
                }
            }
        }
        let year = parseInt(subStrings[0]);
        let month = parseInt(subStrings[1]);
        let day = parseInt(subStrings[2]);
        if (month < 1 || month > 12 || day < 1 || day > new Date(year, month, 0).getDate()) {
            status = 0;
        }
        if (status === 0) {
            return "INCORRECT";
        } else {
            return year + " " + month + " " + day;
        }
    }
}