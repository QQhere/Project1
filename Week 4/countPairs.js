/*
Sum pair of sequence equal to a number
Description
Cho dãy a1, a2, ..., an trong đó các phần tử đôi một khác nhau và 1 giá trị nguyên dương M. Hãy đếm số Q các cặp (i,j) sao cho 1 <= i < j <= n và ai + aj = M.

Dữ liệu
Dòng 1: ghi n và M (1 <= n, M <= 1000000)
Dòng 2: ghi a1, a2, ..., an
Kết quả
Ghi ra giá trị Q
Ví dụ
Dữ liệu
5 6
5 2 1 4 3
Kết quả
2
*/
function countPairs(input) {
    let inputArray = input.trim().split('\n');
    let [n, M] = inputArray[0].split(' ').map(Number);
    let arr = inputArray[1].split(' ').map(Number);
    let count = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(M - arr[i])) {
            count += map.get(M - arr[i]);
        }
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return count;
}

const input = `5 6
5 2 1 4 3`
console.log(countPairs(input))