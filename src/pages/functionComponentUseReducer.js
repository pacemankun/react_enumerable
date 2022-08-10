/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 10:00:34
 * @LastEditTime: 2022-07-10 21:59:03
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useEffect, useReducer } from "react";
import { counterReducer } from "../store";

export default function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useReducer(counterReducer, "0", innitR);
  const [isShow, setIsShow] = useState(true);
  const onToggleShow = () => {
    setIsShow((pre) => !pre);
  };

  function innitR(i) {
    return i - 0;
  }
  useEffect(() => {
    //副作⽤
    console.warn("userEffect2");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 onClick={() => setDate2({ type: "ADD" })}>{date2}</h1>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
      <button onClick={onToggleShow}>切换</button>
      {isShow && <div>前端胖头鱼 显示出来啦</div>}
    </div>
  );
}
