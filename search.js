// 如何确定一个数在有序数组中的位置
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) return mid;

  if (start >= end) return -1;

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 4));

