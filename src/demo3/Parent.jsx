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
    // getTheCounterOne();
  }, [parentCounter]);

  function onButtonTapped() {
    let parentCounter1 = parentCounter + 1;
    setParentCounter(parentCounter1);

    console.log("Parent Button Tapped");
  }
  function onOtherButtonTapped() {
    let otherCount1 = otherCount + 1;
    setOtherCount(otherCount1);

    console.log("Other Button Tapped");
  }

  //not called until call in direct outside of render or in useeffect or in render itself, but call for evry render , even not related dependencyies
  function getTheCounter() {
    console.log("******************************** Function getCounter  ");
    return parentCounter;
  }
  function getTheCounterOne() {
    console.log("******************************** Function getCounter One ");
    return parentCounter;
  }

  // const getTheCounter = useMemo(() => {
  //   console.log("******************************** Function getCounter  ");
  //   return parentCounter;
  // }, []);

  // //it will get auatomatically called when vaule of dependency changes no need to call it manually
  // const getTheCounterOne = useMemo(() => {
  //   console.log("******************************** Function getCounter  One");
  //   return parentCounter;
  // }, [parentCounter]);

  // const getCounter = getTheCounter();

  return (
    <div style={{ backgroundColor: "yellow", height: 300 }}>
      {/* <label style={{ fontSize: 30 }}> Counter : {getTheCounter}</label>
      <label style={{ fontSize: 30 }}> Counter : {getTheCounterOne}</label> */}

      <button
        style={{
          width: 200,
          height: 40,
          backgroundColor: "green",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
        onClick={onButtonTapped}
      >
        Parent
      </button>

      <button
        style={{
          width: 200,
          height: 40,
          backgroundColor: "green",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
        onClick={onOtherButtonTapped}
      >
        Other button
      </button>

      <Child
      // parentCounter={parentCounter}
      // minusParentCounter={minusParentCounter}
      ></Child>
    </div>
  );
}
export default memo(Parent);
