// function retry(fn, times) {
//   return new Promise((resolve, reject) => {
//     function run() {
//       fn()
//         .then(resolve)
//         .catch((err) => {
//           if (times--) {
//             console.log(`还有 ${times} 次尝试`);
//             run();
//           } else {
//             reject(err);
//           }
//         });
//     }
//     run();
//   });
// }

async function retry(fn, count) {
  try {
    return await fn();
  } catch (error) {
    if (count--) {
      return await retry(fn, count);
    } else {
      throw error;
    }
  }
}

// 每隔一秒生成一个随机数，大于0.9才resolve
function retryDemo() {
  return new Promise((resolve, reject) => {
    let r = Math.random();
    setTimeout(() => {
      console.log(r);
      if (r > 0.9) {
        resolve(r);
      } else {
        reject("tanchao:" + r);
      }
    }, 1000);
  });
}

retry(retryDemo, 10);
