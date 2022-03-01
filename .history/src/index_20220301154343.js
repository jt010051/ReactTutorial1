import React from "react";
import  ReactDom from "react-dom";

function greeting (){

  return <h4>this is Jt and this is my first component</h4>
}

ReactDom.render(<greeting/>, document.getElementById("root"))