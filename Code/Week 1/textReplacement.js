/*
Text Replacement
Description
Cho văn bản T và 2 mẫu P1, P2 đều là các xâu ký tự (không chứa ký tự xuống dòng, độ dài không vượt quá 1000). Hãy thay thế các xâu P1 trong T bằng xâu P2.
Dữ liệu
· Dòng 1: xâu P1
· Dòng 2: xâu P2
· Dòng 3: văn bản T
Kết quả:
· Ghi văn bản T sau khi thay thế
Ví dụ
Dữ liệu
AI
Artificial Intelligence
Recently, AI is a key technology. AI enable efficient operations in many fields.
Kết quả
Recently, Artificial Intelligence is a key technology. Artificial Intelligence enable efficient operations in many fields.
*/
function textReplacement(input) {
    let arrayInput = input.split('\n');
    let p1 = arrayInput[0];
    let p2 = arrayInput[1];
    let t = arrayInput[2];
    return t.replace(new RegExp(p1, 'g'), p2);
}

const input = `DS
Data Science
DS is a very new field in technology.`;
console.log(textReplacement(input));