Function.prototype.myBind = function () {
  let that = this
  let thatArg = arguments[0]
  let args = Array.prototype.slice.call(arguments, 1)
  // return function () {
  //     let _args = [...args, Array.prototype.slice.call(arguments)]
  //     return that.apply(thatArg, _args)
  // }

  var FB = function () {
      let _args = [...args, Array.prototype.slice.call(arguments)]
      if (this instanceof FB) {
          // 测试构造函数的属性是否 出现prototype在对象的原型链中的任何位置
          return that.apply(this, _args)
      } else {
          return that.apply(thatArg, _args)
      }
  }


  var newFB = function(){}
  if(that.prototype){
    console.log('that.prototype----sss----------->', that.prototype);
      newFB.prototype = that.prototype
  }
  FB.prototype = new newFB()
  // FB.prototype = that.prototype
  return FB
}

var obj = {
  name: "Xiaoshunshi"
};
var hope = function (time, adderss) {
  this.swear = 'Good Good Study ! Day Day Up!';
  console.log(this.name + " maybe " + time + " go " + adderss);
};
var hoping = hope.myBind(obj, '9:00');
// hoping('home');
var newObj = new hoping('home');
newObj.__proto__.anyProperty = 'anyProperty';
var abc = new hope();
console.log(newObj.swear);