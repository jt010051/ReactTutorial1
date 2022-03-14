import React from "react";
import  ReactDom from "react-dom";


import './index.css' //css
//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX

const author ='RJames Patterson'
  const title ='Run, Rose, Run: A Novel'
  const img='https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL._AC_UL604_SR604,400_.jpg'



function BookList (){
  return  (
<section className='bookList'>
<Book />
<Book />


</section>


  );

}
const Book =(props)=>{

  console.log(props)
return(
  <article className="book">

<img src={img} alt="" />

<h1>{title}</h1>
<h4>{author}</h4>
{console.log(props)}
</article>
);

};





ReactDom.render(<BookList/>, document.getElementById("root"))
