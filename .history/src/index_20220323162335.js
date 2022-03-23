import React from "react";
import  ReactDom from "react-dom";


import './index.css' //css
//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX
const firstBook ={
img:'https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL._AC_UL604_SR604,400_.jpg',
title :'Run, Rose, Run: A Novel',
author:'RJames Patterson'
}




function BookList (){
  return  (
<section className='bookList'>
<Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />

<Book title = "random title" number ={22} />


</section>


  );

}
const Book =(props)=>{

  console.log(props)
return(
  <article className="book">


<p>{props.img}</p>
<p>{props.title}</p>
<p>{props.author}</p>
</article>
);

};





ReactDom.render(<BookList/>, document.getElementById("root"))