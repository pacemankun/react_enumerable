/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-11 10:36:19
 * @LastEditTime: 2022-07-02 16:25:32
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useCallback, Component } from "react";
export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0);
  const addClick = useCallback(fn, []);
  const [value, setValue] = useState("");
  function fn() {
    console.log("useCallback");
  }
  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
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
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.addClick === this.props.addClick) {
      console.info("Func对象相同,不用执行render函数");
      return false;
    }
    return true;
  }
  render() {
    console.log("child render", this.props);
    const { addClick } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={addClick}>add</button>
      </div>
    );
  }
}
