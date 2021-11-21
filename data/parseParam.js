/*
* --- 测试用例 ---
*
* 输入：url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
* 输出：
{
user:'anonymous',
id:[123,456],// 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
city:'北京',// 中文需解码
enabled: true // 未指定值的 key 与约定为 true
}
*/
// git config --global credential.helper store

const url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

function parseParam(url) {
  const map = {};
  const params = new URLSearchParams(url.split("?")[1]); // 也可以通过 & 进行分割后再处理

  for (const [key, value] of params) {
    const val = !Number.isNaN(parseInt(value)) ? parseInt(value) : value;
    if (map[key]) {
      map[key] = [].concat(map[key], val);
    } else {
      map[key] = val || true;
    }
  }

  return map;
}

console.log(parseParam(url));
