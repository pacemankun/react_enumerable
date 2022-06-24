/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-06-24 18:56:05
 * @LastEditTime: 2022-06-24 19:01:45
 * @LastEditors: liukun liukun0227@163.com
 */
import { Redirect } from "react-router-dom";
function redirectPage() {
  // 渲染本组件,会自动跳转至: /anotherPage
  return <Redirect to={"/anotherPage"} />;
}

export default redirectPage;
