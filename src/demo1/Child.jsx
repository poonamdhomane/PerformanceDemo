import React, { memo, useCallback, useEffect } from "react";

function Child() {
  console.log("Child class rendered=====================");

  useEffect(() => {
    console.log("Useeffect Child 1");
  }, []);

  useEffect(() => {
    console.log("Useeffect Child 2");
  }, []);

  let onButtonTappedCallBack = useCallback(() => {
    console.log("----------------Child Button Tapped useCallback ------------");
  }, []);

  const onButtonTapped = () => {
    for (let i = 0; i <= 100000; i++) {
      // console.log("----------------Button Tapped------------");
    }
    console.log("----------------Button Tapped------------");
  };

  return (
    <div
      style={{
        backgroundColor: "pink",
        height: 150,
        width: "50%",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: 200,
          height: 40,
          backgroundColor: "green",
          alignItems: "center",
          marginTop: 40,
        }}
        onClick={onButtonTappedCallBack}
      >
        Child
      </button>
    </div>
  );
}
// export default memo(Child);
export default Child;
