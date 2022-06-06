/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 09:21:02
 * @LastEditTime: 2022-06-05 10:05:46
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { Component } from "react";
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // 使⽤state属性维护状态，在构造函数中初始化状态
    this.state = { date: new Date() };
  }
  componentDidMount() {
    // 组件挂载之后启动定时器每秒更新状态
    this.timerID = setInterval(() => {
      // 使⽤setState⽅法更新状态
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    // 组件卸载前停⽌定时器
    clearInterval(this.timerID);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
