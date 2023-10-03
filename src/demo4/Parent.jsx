import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent class rendered-------------------");
  const [parentCounter, setParentCounter] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    console.log("Useeffect Parent 1");
    // console.log("1 parentCounter = ", parentCounter);
  }, []);

  useEffect(() => {
    console.log("Useeffect Parent 2");
    console.log("1 parentCounter = ", parentCounter);
  }, [parentCounter]);

  //not called until call in direct outside of render or in useeffect or in render itself, but call for evry render , even not related dependencyies
  function getTheCounter() {
    console.log("******************************** Function getCounter Parent ");
    return parentCounter;
  }

  const counter = getTheCounter();

  return (
    <div style={{ backgroundColor: "yellow", height: 300 }}>
      {/* <label style={{ fontSize: 30 }}> Counter : {getTheCounter}</label>
      <label style={{ fontSize: 30 }}> Counter : {getTheCounterOne}</label> */}

      <Child
      // parentCounter={parentCounter}
      // minusParentCounter={minusParentCounter}
      ></Child>
    </div>
  );
}
export default memo(Parent);
