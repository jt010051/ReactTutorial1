import React from "react";
import  ReactDom from "react-dom";
import {books} from './books';
import Book from './book';
import {test} from '/testting/test'
import './index.css' //css

//stateless functional component
//return single elaement

//jsx use className instead of class
//close every element </>
//always return JSX






function BookList (){
  console.log(test)
  return  <section className='bookList'>
{books.map(book=>{
return (
  <Book key={book.id} {...book}></Book>
)

})}
</section>;

}






ReactDom.render(<BookList/>, document.getElementById("root"))
