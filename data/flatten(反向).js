const entry = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};

// 要求转换成如下对象
const output = {
  a: {
    b: { c: { dd: "abcdd" } },
    d: { xx: "adxx" },
    e: "ae",
  },
};

function transform(obj) {
  let ans = {};

  function transPath(path, value) {
    const keys = path.split(".");

    keys.reduce((acc, key, index) => {
      if (index === keys.length - 1) {
        acc[key] = value;
      } else {
        acc[key] = acc[key] || {};
        acc = acc[key];
      }

      return acc;
    }, ans);
  }

  for (const key in obj) {
    transPath(key, obj[key]);
  }

  console.log(JSON.stringify(ans));
  return ans;
}

transform(entry);
