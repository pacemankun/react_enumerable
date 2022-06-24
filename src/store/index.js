/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-06 17:41:27
 * @LastEditTime: 2022-06-23 17:39:02
 * @LastEditors: liukun liukun0227@163.com
 */
import { legacy_createStore as createStore, combineReducers } from "redux";
// https://blog.csdn.net/weixin_63896561/article/details/124669183

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};
export { counterReducer };
const store = createStore(combineReducers({ count: counterReducer }));
export default store;
