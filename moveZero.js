// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

const arr = [0, 1, 0, 0, 3, 12]; // 要考虑到连续0的情况

function moveZero(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }

  console.log(arr);
}

moveZero(arr);

// 方法二双指针

function move(arr) {
  let slow = 0;
  let fast = 0;

  while (fast < arr.length) {
    if (arr[slow] !== 0) {
      slow++;
    } else if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
    fast++;
  }

  console.log(arr);
}

move(arr);
