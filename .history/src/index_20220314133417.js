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
return <article className="book">

<Image></Image>
<Title></Title>
<Author></Author>
</article>

}


const Image =() => <img src="https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL._AC_UL604_SR604,400_.jpg" alt="" />

const Title =() =><h1>Run, Rose, Run: A Novel</h1>
const Author =() =><h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>RJames Patterson</h4>


ReactDom.render(<BookList/>, document.getElementById("root"))