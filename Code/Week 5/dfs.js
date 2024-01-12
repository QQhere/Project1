/*
List order of nodes visited by a DFS
Description
Given a undirected graph =(V,E) in which V = {1,2,..,n} is the set of nodes. Write a program that visit nodes of G by a DFS (consider a lexicorgraphic order of nodes).
Input
Line 1: contains 2 integers n and m (1 <= n,m <= 100000)
Line i+1: contains u and v which are two end-points of the ith edge

Output
Sequence of nodes visited by DFS
Example
Input
7 12
1 2
1 3
2 3
2 4
2 7
3 5 
3 7
4 5
4 6
4 7
5 6
5 7 
Output
1 2 3 5 4 6 7
*/
function DFS(input) {
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
    function dfs(node) {
        visited.add(node);
        result.push(node);
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    dfs(1);
    return result.join(" ");
}

