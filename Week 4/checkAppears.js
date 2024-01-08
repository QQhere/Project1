/*
Kiểm tra xuất hiện
Description
Cho dãy số nguyên A1, A2, . . . , An với mỗi số nguyên Ai kiểm tra xem có số Aj nào bằng Ai hay không với j<i.
Input
Dòng đầu chứa số n (1≤n≤100,000)
Dòng hai chứa nn số nguyên A1, A2, ..., An (1≤Ai≤1000,000,000)
Output
Ghi ra n dòng, dòng thứ i in ra 1 nếu tồn tại Aj=Ai với j<i, ngược lại in ra 0.
Example
input
5
1 4 3 1 4
output
0
0
0
1
1

*/
function checkAppears(input) {
    let inputArray = input.split('\n');
    let n = parseInt(inputArray[0]);
    let arr = inputArray[1].split(' ').map(Number);
    let occurrence = new Array(n).fill(0);
    let set = new Set();
    for (let i = 0; i < n; i++) {
        if (set.has(arr[i])) {
            occurrence[i] = 1;
        }
        set.add(arr[i]);
    }
    return occurrence.join('\n');
}