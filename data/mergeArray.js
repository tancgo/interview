// arr1:[1,2,3,3,4,5]
// arr2:[1,3,4,5,6,6]
// 合并后：[1,2,3,3,4,5,6,6] （两个数组都有的元素的次数取两者里的最大值）
const a = [1, 2, 3, 3, 4, 5];
const b = [1, 3, 4, 5, 6, 6];

function merge(arr1, arr2) {
  const map1 = new Map();
  const map2 = new Map();
  const ans = [];

  for (const n of arr1) {
    map1.set(n, (map1.get(n) || 0) + 1);
  }

  for (const n of arr2) {
    map2.set(n, (map2.get(n) || 0) + 1);
  }

  for (const k of map1.keys()) {
    let n1 = map1.get(k);
    const n2 = map2.get(k);
    if ((n1 && !n2) || n1 >= n2) {
      while (n1 > 0) {
        ans.push(k);
        n1--;
      }
    }
  }

  for (const k of map2.keys()) {
    const n1 = map1.get(k);
    let n2 = map2.get(k);
    if ((!n1 && n2) || n1 < n2) {
      while (n2 > 0) {
        ans.push(k);
        n2--;
      }
    }
  }
  console.log(ans);
  return ans;
}

merge(a, b);
