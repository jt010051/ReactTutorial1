import React from "react";
import  ReactDom from "react-dom";
import {books} from './books';

import './index.css' //css

//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX






function BookList (){
  return  <section className='bookList'>
{books.map(book=>{
return (
  <Book key={book.id} {...book}></Book>
)

})}
</section>;

}
const Book =({ img, title, author }) => {
  //attribute, eventHandler
  //onCLick, onMouseOver
  //const {img, title, author}=props;

  const clickHandler =(e)=>{
console.log(e)
console.log(e.target)
alert('hello world')

  }
  const complexExample =(author) =>{
console.log(author)

  }
return(
  <article className="book" onMouseOver={()=>{

console.log(title)


  }}>

<img src ={img} alt='' />

<h1 onClick={()=> console.log(title)}>{title}</h1>
<h4>{author}</h4>
<button type="button" onClick={clickHandler}>reference example</button>
<button type ="button" onClick={()=>complexExample(author)}>More Complex Example</button>
</article>
);

};





ReactDom.render(<BookList/>, document.getElementById("root"))
