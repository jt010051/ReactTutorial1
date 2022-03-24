import React from "react";
import  ReactDom from "react-dom";


import './index.css' //css
//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX

const books =[
{id:1,
img:'https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL._AC_UL604_SR604,400_.jpg',
title :'Run, Rose, Run: A Novel',
author:'RJames Patterson'
},
{id:2,
img:'https://images-na.ssl-images-amazon.com/images/I/81255VTWssL._AC_UL604_SR604,400_.jpg',
title :'Where the Crawdads Sing',
author:'Delia Owens'
},
{id:3,
img:'https://images-na.ssl-images-amazon.com/images/I/51EaDapchyL._SX332_BO1,204,203,200_.jpg ',
title :'Verity',
author:'Colleen Hoover'
},

];




function BookList (){
  return  <section className='bookList'>
{books.map(book=>{
return (
  <Book key={book.id} book={book}></Book>
)

})}
</section>;

}
const Book =(props)=>{
  const {img, title, author}=props.book;
return(
  <article className="book">

<img src ={img} alt='' />

<h1>{title}</h1>
<h4>{author}</h4>
</article>
);

};





ReactDom.render(<BookList/>, document.getElementById("root"))
