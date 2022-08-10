/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-07-05 00:03:10
 * @LastEditTime: 2022-07-06 19:08:10
 * @LastEditors: liukun liukun0227@163.com
 */
function reverse(x: number | string) {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: "tom",
};
const cat: Cat = {
  name: "tom",
  run() {},
};

// 由于 Animal 兼容 Cat，故而 两者可以相互断言
let tom = animal as Cat;
let tom2 = cat as Animal;

type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

// handleEvent(document.createElement("div"), "scroll"); // 没问题

let tom3: [string, number, boolean, symbol] = ["Tom", 25, true, Symbol()];

let tom4: [string, number] = ["Tom", 25];
tom4.push("male");
console.info(tom4);

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
} // Days
console.info(Days[0]);
