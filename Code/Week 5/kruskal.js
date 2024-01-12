/*
Minimum Spanning Tree - Kruskal
Description
Given a undirected connected graph G=(V,E) where V={1,…,N}. Each edge (u,v)∈E(u,v)∈E has weight w(u,v)w(u,v). Compute minimum spanning tree of G.
Input
Line 1: N and M (1≤N,M≤10
5
) in which NN is the number of nodes and MM is the number of edges.
Line i+1 (i=1,…,M): contains 3 positive integers u, v, and w where w is the weight of edge (u,v)
Output
Write the weight of the minimum spanning tree found.
Example
Input
5 8
1 2 1
1 3 4
1 5 1
2 4 2
2 5 1
3 4 3
3 5 3
4 5 2
Output
7
*/
function kruskal(input) {
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let edges = [];
    for (let i = 1; i <= m; i++) {
        let sub = inputArray[i].split(' ').map(Number);
        edges.push(sub);
    }
    let parent = [];
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }
    edges.sort((a, b) => a[2] - b[2]);
    let result = 0;
    for (let i = 0; i < m; i++) {
        let [u, v, w] = edges[i];
        let parentU = find(u);
        let parentV = find(v);
        if (parentU !== parentV) {
            parent[parentU] = parentV;
            result += w;
        }
    }
    return result;
    function find(node) {
        if (parent[node] === node) {
            return node;
        }
        parent[node] = find(parent[node]);
        return parent[node];
    }
}