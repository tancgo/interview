const list = [
  { key: 1, data: 'A', parentKey: 0 },
  { key: 2, data: 'B', parentKey: 0 },
  { key: 3, data: 'C', parentKey: 1 },
  { key: 4, data: 'D', parentKey: 1 },
  { key: 5, data: 'E', parentKey: 2 },
  { key: 6, data: 'F', parentKey: 3 },
  { key: 7, data: 'G', parentKey: 2 },
  { key: 8, data: 'H', parentKey: 4 },
];
function convert(list) {
  const ans = [];
  const map = {};

  for (const item of list) {
    const { key } = item;
    map[key] = item
  }

  for (const k in map) {
    const { parentKey } = map[k]

    if (parentKey !== 0) {
      if (!map[parentKey].children) {
        map[parentKey].children = []
      }
      map[parentKey].children.push(map[k])
    } else {
      ans.push(map[k])
    }

  }
  console.log(JSON.stringify(ans))

  return ans
}
const result = convert(list);
  /**
[
{
key: 1,
data: 'A',
parentKey: 0,
children: [
  { key: 3, data: 'C', parentKey: 1, children: [{ key: 6, data: 'F', parentKey: 3 }] },
  { key: 4, data: 'D', parentKey: 1, children: [{ key: 8, data: 'H', parentKey: 4 }] },
],
},
{
key: 2,
data: 'B',
parentKey: 0,
children: [
  { key: 5, data: 'E', parentKey: 2 },
  { key: 7, data: 'G', parentKey: 2 },
],
},
];
**/