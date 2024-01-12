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
function maxFlow(input) {
  let lines = input.trim().split('\n');
  let [N, M] = lines[0].split(' ').map(Number);
  let [s, t] = lines[1].split(' ').map(Number);
  let capacity = Array.from({length: N}, () => Array(N).fill(0));
  for (let i = 2; i < M + 2; i++) {
      let [u, v, c] = lines[i].split(' ').map(Number);
      capacity[u - 1][v - 1] = c;
  }
  let residual = capacity.map(row => row.slice());
  let n = residual.length;
  let maxFlow = 0;
  let path = bfs(residual, s - 1, t - 1);
  while (path != null) {
      let flow = Infinity;
      for (let i = 0; i < path.length - 1; i++) {
          let u = path[i], v = path[i + 1];
          flow = Math.min(flow, residual[u][v]);
      }
      maxFlow += flow;
      for (let i = 0; i < path.length - 1; i++) {
          let u = path[i], v = path[i + 1];
          residual[u][v] -= flow;
          residual[v][u] += flow;
      }
      path = bfs(residual, s - 1, t - 1);
  }
  return maxFlow;
}

function bfs(residual, source, sink) {
  let n = residual.length;
  let pred = Array(n).fill(-1);
  let queue = [source];
  pred[source] = source;
  while (queue.length > 0) {
      let u = queue.shift();
      for (let v = 0; v < n; v++) {
          if (pred[v] == -1 && residual[u][v] > 0) {
              pred[v] = u;
              if (v == sink) return getPath(pred, source, sink);
              queue.push(v);
          }
      }
  }
  return null;
}

function getPath(pred, source, sink) {
  let path = [sink];
  while (path[path.length - 1] != source) {
      path.push(pred[path[path.length - 1]]);
  }
  return path.reverse();
}


let input = `7 12
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
console.log(maxFlow(input)); 