/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-11 10:36:19
 * @LastEditTime: 2022-06-23 18:00:10
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useCallback, Component } from "react";
import { Button } from "antd";
export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0);
  const addClick = useCallback(() => {
    console.log("useCallback");
    let sum = 0;
    return (sum += count);
    //只有count变化，才重新计算赋值
  }, [count]);
  const [value, setValue] = useState("");
  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
      <Button type="primary">antd</Button>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child
        addClick={addClick}
        {...{ writable: 23, enumerable: "nihao", configurable: "gaga" }}
        // { writable: 23, enumerable: "nihao", configurable: "gaga" }
      />
    </div>
  );
}
class Child extends Component {
  render() {
    console.log("child render", this.props);
    const { addClick } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}
