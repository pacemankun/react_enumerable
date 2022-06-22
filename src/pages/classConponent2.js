/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 11:09:51
 * @LastEditTime: 2022-06-07 00:23:55
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { Component } from "react";
import store from "../store/index";
const { getState, dispatch, subscribe } = store;
export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.info(66, this);
  }
  setCounter = () => {
    console.info(88, this);
    this.setState((state) => ({ counter: state.counter + 6 }));
    this.setState((state) => ({ counter: state.counter + 2 }));
    // this.setState({
    //   counter: this.state.counter + 6, // 异步执行,在视图更新前 完成(性能)
    // });
    // this.setState({
    //   counter: this.state.counter + 2, // 异步执行,在视图更新前 完成(性能)
    // });
    console.log("counter", this.state.counter);
  };
  componentDidMount() {
    subscribe(() => {
      console.warn("store里的数据发生变化,重新渲染组件");
      this.forceUpdate();
    });
    this.setState(
      () => {},
      () => {}
    );
    // document.body.addEventListener(
    //   "click",
    //   () => {
    //     this.setState({
    //       counter: this.state.counter + 1, // 异步执行,在视图更新前 完成(性能)
    //     });
    //     this.setState({
    //       counter: this.state.counter + 2, // 异步执行,在视图更新前 完成(性能)
    //     });
    //     console.log("counter", this.state.counter);
    //   },
    //   false
    // );
    console.info(77, this);
    // setTimeout(() => {
    //   this.setState({
    //     counter: this.state.counter + 1, // 异步执行,在视图更新前 完成(性能)
    //   });
    //   console.log("counter", this.state.counter);
    // }, 0);
  }
  render = () => {
    console.info("nihao1", store);
    return (
      <div>
        <h3>SetStatePage</h3>
        <h2>{getState()}</h2>
        <button
          onClick={() => {
            dispatch({ type: "ADD" });
          }}
        >
          store修改
        </button>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    );
  };
}
