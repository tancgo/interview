// [1,3,4,5,7,9]    输出： 1点，3-5点，7点，9点
// [1,2,4,6]     输出：周一至周二，周四，周六
// [1,3,15,16,17,20,28,29]      输出：1号，3号，15到17号，20号，28号到29号
const arr = [1, 3, 4, 5, 7, 9];

function transform(arr, prefix, suffix, middle) {
  const ans = [];
  let left = 0;

  for (let right = 1; right <= arr.length; right++) {
    if (arr[right] === arr[right - 1] + 1) continue;
    ans.push(arr.slice(left, right));
    left = right;
  }

  //   console.log(ans);
  return ans.map((n) => {
    if (n.length > 1) {
      return `${prefix}${n[0]}${suffix}${middle}${prefix}${n[n.length - 1]}`;
    }

    return `${prefix}${n[0]}${suffix}`;
  });
}

console.log(transform(arr, "", "点", "-"));
console.log(transform([1, 2, 4, 6], "周", "", "至"));
console.log(transform([1, 3, 15, 16, 17, 20, 28, 29], "", "号", "到"));
