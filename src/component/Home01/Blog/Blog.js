import React from 'react'
import BlogCard from '../Blog/BlogCard'
import BlogData from '../Blog/BlogData'
import SectionHeading from '../SectionHeading/SectionHeading' 

const Blog=()=> {
 const BlogDatas= (val)=>{
      return   <BlogCard img={val.img} heading={val.heading} date={val.date} month={val.month} para={val.para} authorimg={val.authorimg} authorName={val.authorName} catatory={val.catatory} />
 }
 return (
  <div>
    <section id="blog-area" className="py100">
        <div className="container">
            <SectionHeading title="News And Updates" heading={"Latest Thinking of Data Science And Our Company News"}/>
            <div className="row">
                {BlogData.map(BlogDatas)}
            </div>
        </div>
    </section>
  </div>
 )
}

export default Blog
