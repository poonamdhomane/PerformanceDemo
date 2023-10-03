import React, { memo, useEffect, useState } from "react";
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

  return (
    <div style={{ backgroundColor: "yellow", height: 300 }}>
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

      <Child></Child>
    </div>
  );
}
// export default memo(Parent);
export default Parent;
