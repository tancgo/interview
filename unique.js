var array = [
  1,
  1,
  "1",
  "1",
  null,
  null,
  undefined,
  undefined,
  new String("1"),
  new String("1"),
  /a/,
  /a/,
  NaN,
  NaN,
];

function unique0(arr) {
  return [...new Set(arr)];
}

console.log(unique0(array));

function unique(arr) {
  const map = new Map();
  const ans = [];

  for (const item of array) {
    const key = typeof item + JSON.stringify(item);
    if (!map.has[key]) {
      ans.push(item);
    }
    map.set(key, item);
  }

  return ans;
}

console.log(unique(array));
