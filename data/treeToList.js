const tree = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];

const list = [
  {
    id: 1,
    text: "节点1",
    parentId: 0, //这里用0表示为顶级节点
  },
  {
    id: 2,
    text: "节点1_1",
    parentId: 1, //通过这个字段来确定子父级
  },
];

function treeToList(tree) {
  const ans = [];

  function dfs(data) {
    data.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      ans.push(item);
    });
  }

  dfs(tree);

  console.log(JSON.stringify(ans));
  return ans;
}

treeToList(tree);
