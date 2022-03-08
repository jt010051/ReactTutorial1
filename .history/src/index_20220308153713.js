import React from "react";
import  ReactDom from "react-dom";
//stateless functional component
//return single elaement
//always return JSX

function Greeting (){
  return(
    <React.Fragment>
     <div>
<h3>Hello People</h3>   
<ul>

  <li>

    <a href="#">Hello World</a>
  </li>
</ul>
 <div></div>

 </div>
 </div>
    );

}



// const Greeting =() =>{
// return React.createElement('div',{},React.createElement('h1',{}, 'hello world'))


// }
ReactDom.render(<Greeting/>, document.getElementById("root"))