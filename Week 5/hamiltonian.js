/*
Hamiton Cycle
Description
Given an undirected graph G = (V,E). Write a program to check if G is a Hamiltonian graph.
Input
Line 1: a positive integer T (number of graphs)
Subsequent lines are information about T graphs, each has the following format:
Line 1: n and m (number of nodes and edges)
Line i+1 (i = 1, 2, ..., m): u and v : two end points of the ith edge
Output
In the i
th
 line, write 1 if the corresponding is a Hamiltonian graph, and write 0, otherwise
Example
Input
2
5 5
1 2
1 3
2 4
2 5
3 5
7 13
1 3
1 5
1 7
2 4
2 5
2 6
3 4
3 5 
3 7
4 6
4 7
5 7
6 7

Output
0
1
*/
function isHamiltonian(n, m, edges) {
    let graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    for (let i = 0; i < m; i++) {
        let [u, v] = edges[i];
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    let visited = new Set();
    let path = [];
    function dfs(node) {
        visited.add(node);
        path.push(node);
        if (path.length === n) {
            if (graph.get(node).includes(path[0])) {
                return true;
            }
            path.pop();
            visited.delete(node);
            return false;
        }
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }
        path.pop();
        visited.delete(node);
        return false;
    }
    for (let i = 1; i <= n; i++) {
        if (dfs(i)) {
            return 1;
        }
    }
    return 0;
}

function hamiltonian(input) {
    let answer = [];
    let inputArray = input.split('\n');
    let t = Number(inputArray[0]);
    let index = 1;
    for (let i = 0; i < t; i++) {
        let [n, m] = inputArray[index++].split(' ').map(Number);
        let edges = [];
        for (let j = 0; j < m; j++) {
            let [u, v] = inputArray[index++].split(' ').map(Number);
            edges.push([u, v]);
        }
        answer.push(isHamiltonian(n, m, edges));
    }
    return answer.join('\n');
}
const input = `2
5 5
1 2
1 3
2 4
2 5
3 5
7 13
1 3
1 5
1 7
2 4
2 5
2 6
3 4
3 5 
3 7
4 6
4 7
5 7
6 7
`
console.log(hamiltonian(input));