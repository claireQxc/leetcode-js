function getName() {
  console.log(5);
}
var getName;
function Foo() {
  getName = function () {
      console.log(1);
  };
  console.log(this);
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
getName = function () {
  console.log(4);
};


//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();