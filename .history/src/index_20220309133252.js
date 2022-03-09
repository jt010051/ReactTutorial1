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




ReactDom.render(<BookList/>, document.getElementById("root"))