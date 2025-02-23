function cloneDeep(obj, map = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj
  const type = Object.prototype.toString.call(obj).slice(8, -1)
  console.log(JSON.stringify(type))

  // 处理循环引用
  if (map.has(obj)) {
    return map.get(obj)
  }

  // 处理 Date
  if (type === "Date") {
    const copy = new Date(obj)
    map.set(obj, copy)
    return copy
  }

  // 处理Set
  if (type === "Set") {
    const copy = new Set()
    map.set(obj, copy)
    obj.forEach((value) => {
      copy.add(cloneDeep(value, map))
    })
    return copy
  }

  // 处理数组或普通对象
  const clone = Array.isArray(obj) ? [] : {}
  map.set(obj, clone)

  for (const key in obj) {
    // console.log(key, JSON.stringify(obj[key]))
    if (obj.hasOwnProperty(key)) {
      clone[key] = cloneDeep(obj[key], map)
    }
  }

  return clone
}

var obj1 = {
  a: 1,
  b: { a: 2 },
  c: [1, 2, 3],
  d: obj1,
  e: new Date("2025-02-20"),
  s: new Set([{ item: 1 }, { item: 2 }]),
}
var obj2 = cloneDeep(obj1)
console.log(
  obj1 === obj2,
  obj1.c === obj2.c,
  obj1.e === obj2.e,
  obj1.s === obj2.s
)
