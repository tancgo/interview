function myNew(constructor, ...args) {
  const instance = Object(null);

  instance.__proto__ = constructor.prototype;

  const res = constructor.apply(instance, args);

  return res instanceof Object ? res : instance;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();