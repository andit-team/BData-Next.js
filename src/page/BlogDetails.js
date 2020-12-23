import React from 'react'
import Banner from '../component/Common/Banner/index'
import Index from '../component/BlogDetails/index'
import BlogDetailsArea from "../component/BlogDetails/BlogDetailsArea";
import DetailsContent from "../component/BlogDetails/DetailsContent";
import Sidebar from "../component/Blog/Sidebar";

const BlogDetails = () => {
    return (
        <>
            <Banner heading="Blog-Details" menu1="Home" menu2="Blog-Details"/>
            <BlogDetailsArea>
                <DetailsContent/>

                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <Sidebar>

                    </Sidebar>
                </div>
            </BlogDetailsArea>
        </>
    )
}

export default BlogDetails
