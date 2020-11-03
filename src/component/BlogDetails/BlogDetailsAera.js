import React from 'react'
import Sidebar from '../Blog/Sidebar'
import DetailsContent from '../BlogDetails/DetailsContent'

const BlogDetailsAera = () => {
 return (
  <>
     <section id="blog-details-main-area" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <DetailsContent/>
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

export default BlogDetailsAera
