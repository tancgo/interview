// 函数柯里化，要求实现
// add(1,2,3).sumof()     //6
// add(1)(2)(3).sumof()  //6
// add(1,2)(3).sumof()   //6

function add(...args) {
  const curried = function (...rest) {
    return add(...args, ...rest);
  };
  curried.sumof = () => args.reduce((a, b) => a + b);
  return curried;
}

console.log(add(1, 2, 3).sumof());
console.log(add(1)(2)(3).sumof());
console.log(add(1, 2)(3).sumof());
