import React, { memo, useCallback, useEffect, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent class rendered-------------------");
  const [parentCounter, setParentCounter] = useState(0);

  useEffect(() => {
    console.log("Useeffect Parent 1");
    console.log("1 parentCounter = ", parentCounter);
  }, []);

  useEffect(() => {
    console.log("Useeffect Parent 2");
    console.log("1 parentCounter = ", parentCounter);
  }, [parentCounter]);

  function onButtonTapped() {
    let parentCounter1 = parentCounter + 1;
    setParentCounter(parentCounter1);

    console.log("Parent Button Tapped");
  }

  //after added useCallback not rendering child
  const minusParentCounter = useCallback(() => {
    console.log("On Minus Parent COunter Button Tapped");
  }, []);

  //even if we havent call this from child still only just passing as a child as prop from parent it renders child component as well
  // const minusParentCounter = () => {
  //   console.log("On Minus Parent COunter Button Tapped");
  // };

  return (
    <div style={{ backgroundColor: "yellow", height: 300 }}>
      {/* <label style={{ fontSize: 30 }}> Counter : {parentCounter}</label> */}
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

      <Child
        // parentCounter={parentCounter}
        minusParentCounter={minusParentCounter}
      ></Child>
    </div>
  );
}
export default memo(Parent);
