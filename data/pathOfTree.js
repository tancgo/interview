const root = {
  name: "a",
  children: [
    {
      name: "b",
      children: [
        {
          name: "d",
        },
        {
          name: "e",
          children: [
            {
              name: "g",
            },
          ],
        },
        {
          name: "f",
        },
      ],
    },
    {
      name: "c",
    },
  ],
};

function getPath(root) {
  const res = [];

  function dfs(temp, path) {
    if (!temp.children) {
      res.push(path);
      return;
    }

    temp.children.forEach((item) => {
      dfs(item, path + item.name);
    });
  }

  dfs(root, root.name);

  return res;
}

console.log(getPath(root));
