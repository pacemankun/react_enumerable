/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-08 10:25:37
 * @LastEditTime: 2022-06-23 20:17:55
 * @LastEditors: liukun liukun0227@163.com
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">⾸⻚</Link> <Link to="/user">⽤户中⼼</Link>
          {/* 根路由要添加exact，实现精确匹配 */}
          <Routes>
            <Route
              exact
              path="/"
              component={HomePage}
              //children={() => <div>children</div>}
              //render={() => <div>render</div>}
            />
            <Route path="/user" component={UserPage} />
          </Routes>
        </Router>
      </div>
    );
  }
}
class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}
class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}
