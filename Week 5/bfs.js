/*
Sequence of nodes visited by BFS
Description
Given undirected graph G = (V,E) in which V = {1, 2, ..., n} is the set of nodes, and E is the set of m edges.
Write a program that computes the sequence of nodes visited using a BFS algorithm (the nodes are considered in a lexicographic order)

Input
Line 1: contains 2 integers n and m which are the number of nodes and the number of edges
Line i+1 (i = 1, ..., m): contains 2 positive integers u and v which are the end points of the ith edge

Output
Write the sequence of nodes visited by a BFS procedure (nodes a are separated by a SPACE character)
Example

Input
6 7
2 4
1 3
3 4
5 6
1 2
3 5
2 3

Output
1 2 3 4 5 6
*/
function BFS(input) {
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let edges = [];
    for (let i = 1; i <= m; i++) {
        let sub = inputArray[i].split(' ').map(Number);
        edges.push(sub);
    }
    let graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    for (let i = 0; i < m; i++) {
        let [u, v] = edges[i];
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    for (let [key, value] of graph) {
        value.sort((a, b) => a - b);
    }
    let visited = new Set();
    let result = [];
    let queue = [];
    queue.push(1);
    visited.add(1);
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node);
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result.join(" ");
}