/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 10:00:34
 * @LastEditTime: 2022-07-02 10:16:57
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { useState, useEffect } from "react";
export default function FunctionComponent(props) {
  const [date, setDate] = useState(0);
  const [state, setState] = useState(someExpensiveComputation);

  function someExpensiveComputation() {
    return 78;
  }
  useEffect(() => {
    //副作⽤
    console.warn("start", date);
    return () => console.error("end", date, setState);
  }, [date]);
  return (
    <div>
      <h1
        onClick={() => {
          setDate(date + 1);
          console.info("info", date);
        }}
      >
        {date}
      </h1>
      {/* <h1 onClick={() => setDate(0)}>{date}</h1> */}
      <h3>FunctionComponent</h3>
      {state}
    </div>
  );
}
