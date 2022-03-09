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
<Book />
<Book />

<Book />

<Book />

<Book />

<Book />
<Book />

<Book />

</section>


  )

}

const Book =()=>{
return <article>

  this is a book
</article>

}


ReactDom.render(<BookList/>, document.getElementById("root"))