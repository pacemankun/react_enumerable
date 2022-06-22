/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-17 15:29:10
 * @LastEditTime: 2022-06-17 15:39:45
 * @LastEditors: liukun liukun0227@163.com
 */
function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg);
  return arg;
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg; // 返回一个自创函数
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
//f1 (f2 (f3 ("omg") ) )
compose(f1, f2, f3)("omg");
