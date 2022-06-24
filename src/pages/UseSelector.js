import React from "react";
import { useDispatch, useSelector } from "react-redux";

function UseSelectorHook() {
  // const statelk = useSelector(({ count }) => count);
  const statelk = useSelector((state) => state.count);
  const dispatchlk = useDispatch();
  const add = () => {
    dispatchlk({ type: "ADD" });
  };
  return (
    <div>
      <h4>{statelk}</h4>
      <button onClick={add}>+</button>
      <button onClick={() => dispatchlk({ type: "MINUS" })}>-</button>
    </div>
  );
}

export default UseSelectorHook;
