import React from 'react'
import BLogData from '../Blog/BlogData'
import BlogCard from '../Blog/BlogCard'
import Sidebar from '../Blog/Sidebar'

const index=()=> {
 const BlogDatas=(val)=>{
  return <BlogCard  img={val.img} heading={val.heading} comment={val.comment} view={val.view}  category={val.category} date={val.data} para={val.para} button={val.button}/>
 }
 return (
  <>
     <section id="blog-main-area" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="blog-wrapper-blog-item">
                      {BLogData.map(BlogDatas)}
                      <div className="pagantion-area">
                        <ul>
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>5</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <Sidebar/>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default index
