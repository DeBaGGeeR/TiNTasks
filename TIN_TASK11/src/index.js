import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";

var myArr = ["Ibragimov Bakhodir", "Sam Smith", "Joe Han"];
ReactDOM.render(
  <div>
    <Layout
      footer="2019 - PJWSTK"
      myArray={myArr}
    />
  </div>,
  document.getElementById("app")
);
