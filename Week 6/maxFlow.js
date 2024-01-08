/*
Max Flow
Description
Given a network G = (V, E) which is a directed weighted graph. Node s is the source and node t is the target. c(u,v) is the capacity of the arc (u,v). Find the maximum flow on G.
Input
•Line 1: two positive integers N and M (1 <= N <= 10
4
, 1 <= M <= 10
6
)
•Line 2: contains 2 positive integers s and t
•Line i+2 (I = 1,. . ., M): contains two positive integers u and v which are endpoints of i
th
 arc
Output
  Write the value of the max-flow found
Example
Input
7 12
6 7
1 7 7
2 3 6
2 5 6
3 1 6
3 7 11
4 1 7
4 2 4
4 5 5
5 1 4
5 3 4
6 2 8
6 4 10
Output
17
*/
function maxFlow(n, m, s, t, edges) {
    const INF = 1e9;
    const adj = Array.from({ length: n + 1 }, () => []);
    const level = Array.from({ length: n + 1 }, () => 0);
    const iter = Array.from({ length: n + 1 }, () => 0);
  
    for (let i = 0; i < m; i++) {
      const [u, v, c] = edges[i];
      adj[u].push([v, c, adj[v].length]);
      adj[v].push([u, 0, adj[u].length - 1]);
    }
  
    function bfs() {
      level.fill(0);
      const q = [s];
      level[s] = 1;
      while (q.length) {
        const u = q.shift();
        for (const [v, c] of adj[u]) {
          if (c > 0 && !level[v]) {
            level[v] = level[u] + 1;
            q.push(v);
          }
        }
      }
      return level[t] > 0;
    }
  
    function dfs(u, flow) {
        if (u === t) return flow;
        for (let i = iter[u]; i < adj[u].length; i++) {
          const [v, c, r] = adj[u][i];
          if (c > 0 && level[v] === level[u] + 1) {
            const f = dfs(v, Math.min(flow, c));
            if (f > 0) {
              adj[u][i][1] -= f;
              adj[v][r][1] += f;
              return f;
            }
          }
        }
        return 0;
      }
  
    let ans = 0;
    while (bfs()) {
      iter.fill(0);
      let f;
      while ((f = dfs(s, INF))) {
        ans += f;
      }
    }
    return ans;
  }
  
  const input = `7 12
  6 7
  1 7 7
  2 3 6
  2 5 6
  3 1 6
  3 7 11
  4 1 7
  4 2 4
  4 5 5
  5 1 4
  5 3 4
  6 2 8
  6 4 10`;
  function re(input) {
    const lines = input.split("\n");
    let inputArray = input.split('\n');
    let nm = inputArray[0].split(' ').map(Number);
    let n = nm[0];
    let m = nm[1];
    let st= inputArray[1].split(' ').map(Number);
    let s = st[0];
    let t = st[0];
    const edges = lines.slice(2).map(line => line.split(' ').map(Number));
    const ans = maxFlow(n, m, s, t, edges);
    return ans;
}

  