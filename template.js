let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18,
};

function render(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => data[key]);
}

console.log(render(template, data)); // 我是姓名，年龄18，性别undefined

let mobile = "18016438098";

console.log(mobile.replace(/(?<=\d{7})(\d{4})/g, () => "*".repeat(4))); // positive lookbehind

console.log(mobile.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
console.log(mobile.replace(/(?=(\d{4})+$)/g, "-")); // positive lookhead
