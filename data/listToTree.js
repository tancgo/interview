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

function listToTree(list) {
  const map = {};
  const ans = [];

  list.forEach((item) => {
    map[item.id] = item;
  });

  for (const key in map) {
    if (map[key].parentId !== 0) {
        const parentId = map[key].parentId
        if(!map[parentId].children) {
            map[parentId].children = []
        }
        map[parentId].children.push(map[key])
    } else {
      ans.push(map[key]);
    }
  }

  console.log(JSON.stringify(ans));
  return ans
}

listToTree(list);
