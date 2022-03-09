import React from "react";
import  ReactDom from "react-dom";
//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX

function BookList (){
  return (
<section>
This is a booklist
</section>


  )

}

const Person=() =><h2>john doe</h2>
const Message = () =>{
return <p>this is my message</p>;


}


// const Greeting =() =>{
// return React.createElement('div',{},React.createElement('h1',{}, 'hello world'))


// }
ReactDom.render(<BookList/>, document.getElementById("root"))