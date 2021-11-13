Array.prototype.mysplice = function (start, deleteCount, ...addList) {
  if (start < 0) {
    if (Math.abs(start) > this.length) {
      start = 0;
    } else {
      start += this.length;
    }
  }

  if (typeof deleteCount === "undefined") {
    deleteCount = this.length - start;
  }

  const removeList = this.slice(start, start + deleteCount);
  const rightList = this.slice(start + deleteCount);

  let addIndex = start;

  addList.concat(rightList).forEach((n) => {
    this[addIndex] = n;
    addIndex++;
  });
  this.length = addIndex;

  return removeList;
};

const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
console.log(arr.mysplice(0, 1, 4, 5, 6, 7), arr);
console.log(arr1.splice(0, 1, 4, 5, 6, 7), arr1);
