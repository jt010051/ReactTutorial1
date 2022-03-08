import React from "react";
import  ReactDom from "react-dom";
//stateless functional component
//always return JSX
// function Greeting (){
//   return <h4>hello world</h4>

// }



const Greeting =() =>{
return React.createElement('h1',{},'hello world')


}
ReactDom.render(<Greeting/>, document.getElementById("root"))