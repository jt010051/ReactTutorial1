import React from "react";
import  ReactDom from "react-dom";
//stateless functional component
//always return JSX

function Greeting (){
  return(
     <div>
<h3>Hello People</h3>   
<ul>

  <li>

    <a href="#">Hello World</a>
  </li>
</ul>

 </div>
    );

}



// const Greeting =() =>{
// return React.createElement('div',{},React.createElement('h1',{}, 'hello world'))


// }
ReactDom.render(<Greeting/>, document.getElementById("root"))