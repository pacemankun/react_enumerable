/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-11 10:36:19
 * @LastEditTime: 2022-06-11 12:52:38
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useMemo } from "react";
export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    return (sum += count);
    //只有count变化，才重新计算赋值
  }, [count]);
  const [value, setValue] = useState("");
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>expensive:{expensive}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
}
