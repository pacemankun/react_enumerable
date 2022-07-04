/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-05-28 16:47:44
 * @LastEditTime: 2022-07-03 10:24:18
 * @LastEditors: liukun liukun0227@163.com
 */
import "./App.css";

// import UseSelector from "./pages/UseSelector";
// import ClassComponent from "./pages/classConponent";
// import ClassComponent2 from "./pages/classConponent2";
// import ClassComponent3 from "./pages/classConponent3";
// import ClassComponent4 from "./pages/classComponentThis";
// import FunctionComponent from "./pages/functionComponent";
// import FunctionUseMemo from "./pages/functionUseMemo";
// import FunctionUseCallback from "./pages/functionUseCallback";
import FunctionComponentUseReducer from "./pages/functionComponentUseReducer";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent4 /> */}
      {/* <ClassComponent3 /> */}
      {/* <ClassComponent2 /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <FunctionUseMemo /> */}
      <FunctionComponentUseReducer />
      {/* <FunctionUseCallback /> */}
      {/* <UseSelector></UseSelector> */}
    </div>
  );
}

export default App;
