import React from 'react'
import Banner from '../component/Common/Banner/index'
import BlogDetailsArea from "../component/BlogDetails/BlogDetailsArea";
import BlogPosts from "../component/Blog/BlogPosts";
import Sidebar from "../component/Blog/Sidebar";

const Blog = () => {
    return (
        <>
            <Banner heading="Blog" menu1="Home" menu2="Blog"/>
            <BlogDetailsArea>
                <BlogPosts/>
                <Sidebar/>
            </BlogDetailsArea>
        </>
    )
}

export default Blog
