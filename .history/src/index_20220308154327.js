import React from "react";
import  ReactDom from "react-dom";
//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX

function Greeting (){
  return (
<div>

  <h1>hello world</h1>
</div>


  )

}



// const Greeting =() =>{
// return React.createElement('div',{},React.createElement('h1',{}, 'hello world'))


// }
ReactDom.render(<Greeting/>, document.getElementById("root"))