Function.prototype.myCall = function (context, ...args) {
  if (context === undefined || context === null) {
    context = window;
  } else {
    context = Object(context);
  }

  const fn = Symbol();
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

Function.prototype.myBind = function (context, ...args) {
  const self = this;

  const fbind = function (...rest) {
    return slef.apply(this instanceof self ? this : context, args.concat(rest));
  };

  fbind.prototype = Object.create(self.prototype);

  return fbind;
};
/*****************
 * 一句话介绍 bind:

bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )

由此我们可以首先得出 bind 函数的两个特点：

返回一个函数
可以传入参数
 */
