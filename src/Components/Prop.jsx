import React from "react";

function Prop(prop){
    return(
      <>
        <div>{prop.name}</div>
        <h1>{prop.place}</h1>
        <h2>{prop.children}</h2>
      </>

    )
}
export default Prop