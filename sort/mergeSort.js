//归并排序
function mergeSort(array) {
  const len = array.length;
  if (len < 2) return array;

  const middle = Math.floor(len / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  console.log(left, right);
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

const arr = [5, 1, 6, 2, 4, 3];
console.log(mergeSort(arr));
