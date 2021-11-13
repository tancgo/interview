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
