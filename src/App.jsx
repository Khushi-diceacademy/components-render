import React from "react";
import Card from "./Components/Card";
import Prop from "./Components/Prop";
import "./App.css";
let named = "khushi";
// let arr=["apple","mango","grapes"]
function App() {
  return (
    <>
      {/* <h1 className="avatar">hey {named}</h1> */}
      {/* {arr.map((elem,value)=>(
        <div key={value}>{2}</div>
      ))} */}
      <Card />
      <Prop name="khushi gupta" place="react js going towards backend">
        <h1>heyyyyyy</h1>
        <h2>gain gain gain </h2>
        <h3>try try and winnnnnnn</h3>
      </Prop>
      <Prop>
        <h1>heyhdygikh</h1>
      </Prop>
      <Card>
        <h1>heyyy card</h1>
      </Card>
     <Card/>
    </>
  );
}

export default App;
