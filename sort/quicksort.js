function quickSort(array) {
  function rec(array) {
    if (array.length <= 1) {
      return array;
    }
    const left = [];
    const right = [];
    const mid = array[0];
    for (let i = 1; i < array.length; i++) {
      const cur = array[i];
      if (cur < mid) {
        left.push(cur);
      } else {
        right.push(cur);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  }
  const res = rec(array);
  return res;
}

// 方法二
var sortArray = function (nums) {
  if (nums.length < 2) return nums;
  return quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right);
  quickSort(nums, left, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, right);
  return nums;
}

function partition(nums, left, right) {
  // 以最后一个元素为基准
  let pivotValue = nums[right];
  let pivot = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < pivotValue) {
      [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
      pivot++;
    }
  }
  // 把基准值放在中间,左边的数比基准值小，右边的数比基准值大
  [nums[pivot], nums[right]] = [nums[right], nums[pivot]];

  return pivot;
}
