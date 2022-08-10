/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-07-05 00:03:10
 * @LastEditTime: 2022-07-06 19:08:10
 * @LastEditors: liukun liukun0227@163.com
 */
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
var animal = {
    name: "tom"
};
var cat = {
    name: "tom",
    run: function () { }
};
// 由于 Animal 兼容 Cat，故而 两者可以相互断言
var tom = animal;
var tom2 = cat;
function handleEvent(ele, event) {
    // do something
}
// handleEvent(document.createElement("div"), "scroll"); // 没问题
var tom3 = ["Tom", 25, true, Symbol()];
var tom4 = ["Tom", 25];
tom4.push("male");
console.info(tom4);
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {})); // Days
console.info(Days[0]);
