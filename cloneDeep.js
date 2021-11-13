function cloneDeep(target, map = new WeakMap()) {
  const type = Object.prototype.toString.call(target).slice(8, -1);
  const basicTypes = ["String", "Number", "Boolean", "Null", "Undefined"];
  let newTarget = null;

  if (map.has(target)) {
    return map.get(target);
  }

  map.set(target, newTarget);

  if (basicTypes.includes(type)) {
    return target;
  } else if (type === "Object") {
    newTarget = {};
  } else if (type === "Array") {
    newTarget = [];
  }

  for (const key in newTarget) {
    if (newTarget.hasOwnProperty(key)) {
      newTarget[key] = cloneDeep(newTarget[key]);
    }
  }

  return newTarget;
}

var obj1 = {
  a: 1,
  b: { a: 2 },
  c: [1, 2, 3],
  d: obj1,
};
var obj2 = cloneDeep(obj1);
console.log(obj1 === obj2, obj1["c"] === obj2["c"]);
