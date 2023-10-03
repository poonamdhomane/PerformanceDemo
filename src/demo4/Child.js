import React, { memo, useCallback, useEffect, useState } from "react";

function Child({ minusParentCounter }) {
  const [childCounter, setChildCounter] = useState();
  console.log("Child class rendered=====================");

  useEffect(() => {
    console.log("Useeffect Child 1");
  }, []);

  useEffect(() => {
    console.log("Useeffect Child 2");
  }, []);

  function getTheCounter() {
    console.log("******************************** Function getCounter child ");
    return childCounter;
  }

  const counter = getTheCounter();

  return (
    <div
      style={{
        backgroundColor: "pink",
        height: 150,
        width: "50%",
        alignItems: "center",
      }}
    ></div>
  );
}
export default memo(Child);
