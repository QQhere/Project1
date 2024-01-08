/*
Shortest Path between 2 nodes on a directed graph with non-negative weights
Description
Given a directed graph G = (V,E) in which V = {1,2,...,n) is the set of nodes. Each arc (u,v) has a non-negative weight w(u,v). Given two nodes s and t of G. Find the shortest path from s to t on G.
Input
Line 1: contains two integers n and m which are the number of nodes and the number of arcs of G (1 <= n <= 100000)
Line i + 1(i = 1,2,...,m): contains 3 integers u, v, w in which w is the weight of arc(u,v) (0 <= w <= 100000)
Line m+2: contains two integers s and t
Output
Write the weight of the shortest path found or write -1 if no path from s to t was found
Example
Input
5 7
2 5 87
1 2 97
4 5 78
3 1 72
1 4 19
2 3 63
5 1 18
1 5

Output
97
*/
function shortestPath(n, m, edges, s, t) {
  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < m; i++) {
    const [u, v, w] = edges[i];
    graph[u - 1].push([v - 1, w]);
  }

  const dist = Array.from({ length: n }, () => Infinity);
  dist[s - 1] = 0;

  const pq = [[0, s - 1]];
  while (pq.length) {
    const [d, u] = pq.shift();
    if (d > dist[u]) continue;
    for (const [v, w] of graph[u]) {
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
        pq.push([dist[v], v]);
      }
    }
  }

  return dist[t - 1] === Infinity ? -1 : dist[t - 1];
}

function shortestPathBetween2Nodes(input) {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1, m + 1).map(line => line.split(' ').map(Number));
  const [s, t] = lines[m + 1].split(' ').map(Number);
  return shortestPath(n, m, edges, s, t);
}