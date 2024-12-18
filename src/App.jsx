import React from "react";
import Card from './Components/Card';
import './App.css'
let named = "khushi"
// let arr=["apple","mango","grapes"]
function App() {
  return (
    <div>
      {/* <h1 className="avatar">hey {named}</h1> */}
      {/* {arr.map((elem,value)=>(
        <div key={value}>{2}</div>
      ))} */}
      <Card/>
  

    </div>
  );
}

export default App;
