/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-05 09:21:02
 * @LastEditTime: 2022-06-23 20:01:45
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { Component } from "react";
import { connect } from "react-redux";
export default connect(
  // state 映射到props
  (state) => ({ num: state.count }),
  // dispatch 各种方法映射到props
  {
    add: () => ({ type: "ADD" }),
    minus: () => ({ type: "MINUS" }),
  }
)(
  class ClassComponent extends Component {
    render() {
      const { num, add, minus } = this.props;
      console.info(this.props);
      return (
        <div>
          <p>{num}</p>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      );
    }
  }
);
