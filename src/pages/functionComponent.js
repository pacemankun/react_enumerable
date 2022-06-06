/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 10:00:34
 * @LastEditTime: 2022-06-05 10:05:08
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useEffect } from "react";

export function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    //副作⽤
    console.warn("userEffect");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer); //组件卸载的时候执⾏
  }, []);
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
