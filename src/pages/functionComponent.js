/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 10:00:34
 * @LastEditTime: 2022-06-22 17:23:01
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useEffect, useReducer } from "react";
import { counterReducer } from "../store";
export default function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useReducer(counterReducer, "0", innitR);

  function innitR(i) {
    return i - 0;
  }
  useEffect(() => {
    //副作⽤
    console.warn("userEffect2");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer); //组件卸载的时候执⾏
  }, []);
  return (
    <div>
      <h1 onClick={() => setDate2({ type: "ADD" })}>{date2}</h1>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
