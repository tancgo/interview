// 给定一个由n个正整数组成的数组，并指定结果m
// 求出将n个正整数通过相加或者相减的方式，得到结果m的组合方式有多少种
// 数组： [1，1，1，1，1]， 结果：3
//   组合方式有5种

function getTotal(arr, target) {
  let count = 0;
  const n = arr.length
  const track= []

  function dfs(sum, start, path) {
    if (start === n) {
      if (sum === target &&　path.length === 2*n　) {
        count++;
        track.push(path)
      }
      return
    }

    for (let i = start; i < n; i++) {
      const cur = arr[i]
      dfs(sum + cur, i + 1, `${path}+${cur}`)
      dfs(sum - cur, i + 1, `${path}-${cur}`)
    }
  }

  dfs(0, 0, '')
  console.log(count, track)
  return count
}

getTotal([1,1,1,1,1], 3)