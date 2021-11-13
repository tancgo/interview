const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function flatten(obj) {
  const res = {};

  function dfs(target, path) {
    if (!isObject(target)) {
      res[path] = target;
      return;
    }

    if (Array.isArray(target)) {
      for (let i = 0; i < target.length; i++) {
        dfs(target[i], `${path}[${i}]`);
      }
    } else {
      for (const key in target) {
        dfs(target[key], `${path}${path ? "." : ""}${key}`);
      }
    }
  }

  dfs(obj, "");

  return res;
}

console.log(flatten(obj));
