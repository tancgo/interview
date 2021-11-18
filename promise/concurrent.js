/**
 *  @param {number} limit 并发限制数
 *  @param {(() => Promise<any>)[]} requests 包含所有请求的数组
 *  @returns {Promise<any[]>} 结果数组
 **/
async function concurrentControl(limit, requests) {
  // 存储所有的异步任务
  const res = [];
  // 存储正在执行的异步任务
  const executing = [];
  for (const request of requests) {
    const p = Promise.resolve().then(() => request());
    // 保存新的异步任务
    res.push(p);
    // 当limit值小于或等于总任务个数时，进行并发控制
    if (limit <= requests.length) {
      console.log(res, "res");

      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      // 保存正在执行的异步任务
      executing.push(e);
      if (executing.length >= limit) {
        // 等待较快的任务执行完成
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(res);
}

let i = 0;
function generateRequest() {
  const j = ++i;
  return function request() {
    return new Promise((resolve) => {
      console.log(`r${j}...`);
      setTimeout(() => {
        resolve(`r${j}`);
      }, 1000 * j);
    });
  };
}
const requests = new Array(6).fill("").map(() => generateRequest());

async function main() {
  const results = await concurrentControl(2, requests);
  console.log(results);
}
main();
