/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-10 13:58:20
 * @LastEditTime: 2022-06-10 15:39:49
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { Component } from "react";

export default class componentName extends Component {
  constructor() {
    super();
    this.state = { a: 0 };
    // this.setA = this.setA.bind(this);
  }
  setA(props) {
    console.info(77, props);
    this.setState({ a: this.state.a + 1 });
    this.setB();
  }
  setB() {
    console.info("setB");
  }
  componentDidMount() {
    // this.setB();
  }
  render() {
    return (
      <div>
        <button onClick={this.setA}>点我普通</button>
        <button onClick={this.setA.bind(this)}>点我bind</button>
        <button onClick={(e) => this.setA(100, e)}>点=》我</button>
        {this.state.a}
      </div>
    );
  }
}
