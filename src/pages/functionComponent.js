/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 10:00:34
 * @LastEditTime: 2022-06-30 23:19:50
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useEffect } from "react";
export default function FunctionComponent(props) {
  const [date, setDate] = useState(0);

  useEffect(() => {
    //副作⽤
    console.warn("start", date);
    return () => console.error("end", date);
  }, []);
  return (
    <div>
      <h1 onClick={() => setDate(date + 1)}>{date}</h1>
      <h3>FunctionComponent</h3>
    </div>
  );
}
