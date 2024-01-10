/*
Simulation Queue
Description
Perform a sequence of operations over a queue, each element is an integer:
PUSH v: push a value v into the queue
POP: remove an element out of the queue and print this element to stdout (print NULL if the queue is empty)
Input
Each line contains a command (operration) of type
PUSH  v
POP
Output
Write the results of POP operations (each result is written in a line)
Example
Input
PUSH 1
PUSH 2
PUSH 3
POP
POP
PUSH 4
PUSH 5
POP
#
Output
1
2
3

Input
PUSH 1
POP
POP
PUSH 4
POP
#
Output
1
NULL
4
*/
function simulationQueue(input) {
    let queue = [];
    let output = [];
    let lines = input.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.startsWith("PUSH")) {
            let value = parseInt(line.split(" ")[1]);
            queue.push(value);
        } else if (line === "POP") {
            let value = queue.shift();
            if (value === undefined) {
                output.push("NULL");
            } else {
                output.push(value);
            }
        } else {
            break;
        }
    }
    return output.join("\n");
}
