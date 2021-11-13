Array.prototype.myreduce = function (cb, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new Error("数组为空时，初始值不能为空");
  }
  let startIndex = initialValue ? 0 : 1;
  let acc = initialValue || this[0];

  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

const arr = [1, 2, 3];

console.log(arr.myreduce((a, b) => a + b));
console.log(arr.myreduce((a, b) => a + b, 10));
console.log(
  arr.myreduce((acc, item) => {
    acc += item.toString();
    return acc;
  }, "")
);
