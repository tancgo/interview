const a = [
  [1, 1],
  [1, 0],
];
const b = [
  [2, 1, 0],
  [1, 1, 1],
  [1, 0, 0],
];

function resolve(matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let max = 0;

  function dfs(i, j, count) {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    max = Math.max(max, count);
    matrix[i][j] = 0;

    if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
      matrix[i - 1][j] = 2;
      dfs(i - 1, j, count++);
    }
    if (i + 1 < m && matrix[i + 1][j] === 1) {
      matrix[i + 1][j] = 2;
      dfs(i + 1, j, count++);
    }
    if (matrix[i][j + 1] === 1 && j + 1 < n) {
      matrix[i][j + 1] = 2;
      dfs(i, j + 1, count++);
    }
    if (matrix[i][j - 1] === 1 && j - 1 >= 0) {
      matrix[i][j - 1] = 2;s
      dfs(i, j - 1, count++);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 2) {
        dfs(i, j, 0);
      }
    }
  }

  const ans = max === 0 ? -1 : max;
  console.log(ans, "ans");
  return ans;
}

resolve(a);
resolve(b);
