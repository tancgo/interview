function parseToMoney(num) {
  const result = [];
  let count = 0;
  const [interger, decimal] = num.toString().split(".");
  const nums = interger.split("");

  for (let i = nums.length - 1; i >= 0; i--) {
    count++;
    result.unshift(nums[i]);
    if (!(count % 3) && i !== 0) {
      result.unshift(",");
    }
  }

  return decimal ? result.join("") + '.' + decimal.substring(0,3) : result.join("");
}

console.log(parseToMoney(1234.56)); // return '1,234.56'
console.log(parseToMoney(123456789)); // return '123,456,789'
console.log(parseToMoney(1087654.321)); // return '1,087,654.321'
console.log(parseToMoney(1087654.32112)); // return '1,087,654.321