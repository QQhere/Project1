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
    var graph = inputToGraph(input);
    var visited = [];
    var queue = [1];

    while(queue.length > 0) {
        var node = queue.shift(); 
        if(!visited.includes(node)) {
            visited.push(node);
            var neighbours = graph[node]; 
            neighbours.sort((a, b) => a - b);
            queue.push(...neighbours);
        }

        if(queue.length === 0) {
            for(var i = 1; i <= Object.keys(graph).length; i++) {
                if(!visited.includes(i)) {
                    queue.push(i);
                    break;
                }
            }
        }
    }
    return visited.join(" ");
}

function inputToGraph(input) {
    var lines = input.split('\n');
    var graph = {};
    for(var i = 1; i < lines.length; i++) {
        var [u, v] = lines[i].split(' ').map(Number);
        if(!graph[u]) {
            graph[u] = [];
        }
        if(!graph[v]) {
            graph[v] = [];
        }
        graph[u].push(v);
        graph[v].push(u);
    }
    return graph;
}

const input = `16 16
2 4
1 3
3 4
5 6
1 2
3 5
2 3
7 2
6 9
9 10
4 10
5 11
8 12
12 14
13 15
13 16`;
console.log(BFS(input));