import React from "react";
import  ReactDom from "react-dom";

import './index.css' //css
//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX

function BookList (){
  return  (
<section className='bookList'>
<Book />

</section>


  );

}
const author ='RJames Patterson'
const Book =()=>{
  const title ='Run, Rose, Run: A Novel'
return(
  <article className="book">

<img src="https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL._AC_UL604_SR604,400_.jpg" alt="" />

<h1>{title}</h1>
<h4>{author.toUpperCase()}</h4>
{/* <p>{let x =6}</p> */}
<p>{6+6}</p>
</article>
);

};





ReactDom.render(<BookList/>, document.getElementById("root"))
