/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 09:21:02
 * @LastEditTime: 2022-06-17 16:30:09
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { Component } from "react";
import { connect } from "react-redux";
const Context = React.createContext();
const store = {
  name: "nihao",
  sayHi() {
    console.info(this.name);
  },
};
export default connect(
  (state) => {
    // state 映射到props
    return { num: state };
  },
  {
    // dispatch 各种方法映射到props
    add: () => {
      return { type: "ADD" };
    },
    minus: () => {
      return { type: "MINUS" };
    },
  }
)(
  class ClassComponent extends Component {
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
      }, 10000000);
    }
    componentWillUnmount() {
      // 组件卸载前停⽌定时器
      clearInterval(this.timerID);
    }
    componentDidUpdate() {
      console.log("componentDidUpdate");
    }
    render() {
      const { num, add, minus } = this.props;
      console.info(this.props);
      return (
        <Context.Provider value={store}>
          <div>
            {this.state.date.toLocaleTimeString()}
            <p></p>
            <button onClick={add}>add</button>
            <p>{num}</p>
            <button onClick={minus}>minus</button>
            <Context.Consumer>
              {(value) => <div onClick={() => value.sayHi()}>{value.name}</div>}
            </Context.Consumer>
          </div>
        </Context.Provider>
      );
    }
  }
);
