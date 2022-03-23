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
const secondBook ={
img:'https://images-na.ssl-images-amazon.com/images/I/81255VTWssL._AC_UL604_SR604,400_.jpg',
title :'Where the Crawdads Sing',
author:'Delia Owens'
}



function BookList (){
  return  (
<section className='bookList'>
<Book 
img={firstBook.img} 
title={firstBook.title} 
author={firstBook.author}
 />
<Book 
img={secondBook.img} 
title={secondBook.title} 
author={secondBook.author} 
/>



</section>


  );

}
const Book =({img, title, author})=>{

  //const {img, title, author}=props
return(
  <article className="book">

<img src ={img} alt='' />

<h1>{title}</h1>
<h4>{author}</h4>
</article>
);

};





ReactDom.render(<BookList/>, document.getElementById("root"))
