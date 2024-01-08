/*
All pair shortest paths
Description
Given a directed graph G = (V, E) in which V = {1, 2, ..., n} is the set of nodes, and w(u,v) is the weight (length) of the arc(u,v). Compute d(u,v) - the length of the shortest path from u to v in G, for all u,v in V.
Input
Line 1: contains 2 positive integers n and m (1 <= n,m <= 10000)
Line i+1 (i = 1, 2, ..., m): contains 3 positive integers u, v, w in which w is the weight of the arc (u,v) (1 <= w <= 1000)
Output
Line i (i = 1, 2, ..., n): wirte the ith row of the matrix d (if there is not any path from node i to node j, then d(i,j) = -1)
Example
Input
4 9 
1 2 9 
1 3 7 
1 4 2 
2 1 1 
2 4 5 
3 4 6 
3 2 2 
4 1 5 
4 2 8
Output
0 9 7 2  
1 0 8 3  
3 2 0 5  
5 8 12 0
*/
function allPairShortestPaths(n, m, edges) {
    let answer = [];
    let dist = [];
    for (let i = 1; i <= n; i++) {
        dist[i] = [];
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else {
                dist[i][j] = Infinity;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
    }
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        sub = dist[i].map(d => d === Infinity ? -1 : d).join(" ");
        answer.push(sub);
    }
    return answer.join('\n')
}

function shortestPaths(input) {
    let inputArray = input.split('\n');
    let [n, m] = inputArray[0].split(' ').map(Number);
    let edges = [];
    for (let i = 1; i <= m; i++) {
        let [u, v, w] = inputArray[i].split(' ').map(Number);
        edges.push([u, v, w]);
    }
    return allPairShortestPaths(n, m, edges)
}