import logo from "./logo.svg";
import "./App.css";
import Parent from "./demo1/Parent";
import Parent2 from "./demo2/Parent";
import Parent3 from "./demo3/Parent";
import Parent4 from "./demo4/Parent";
import Parent6 from "./demo6/Parent";

import { memo, useEffect, useState } from "react";
import Component from "./demo5/Component";

function App() {
  console.log("App class rendered=====================");

  const item = [
    {
      data: {
        Branch: "RAJWADI EMPORIUM INDIA PVT.LTD.",
        Sale_Amount: 1699,
        Sale_Qty: 1,
        Sale_Value: 1699,
        Supplier: "Jayantilal Brothers,Bangalore",
        _id: ["ObjectId"],
        billdate: "24/Jan/2023",
        cat3: "W.SAREE",
        cat4: "NA",
        cat7: "NA",
      },
    },
    {
      data: {
        Branch: "RAJWADI EMPORIUM INDIA PVT.LTD.",
        Sale_Amount: 1699,
        Sale_Qty: 1,
        Sale_Value: 1699,
        Supplier: "Jayantilal Brothers,Bangalore",
        _id: ["ObjectId"],
        billdate: "24/Jan/2023",
        cat3: "W.SAREE",
        cat4: "NA",
        cat7: "NA",
      },
    },
  ];

  return (
    <div className="App">
    <Parent></Parent>
      {/* <Parent></Parent> <Parent4></Parent4> */}
      {/* <Component id={1}></Component> */}
      {/* <Component id={2}></Component>
      <Component id={3}></Component> */}
      {/* <Parent6 item={item[0]}></Parent6>
      <Parent6 item={item[1]}></Parent6> */}
    </div>
  );
}

export default App;
