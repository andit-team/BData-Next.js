import React from 'react'

// Import Sidebar
import Sidebar from '../Blog/Sidebar'

// Import Blog Details Content
import DetailsContent from '../BlogDetails/DetailsContent'

const BlogDetailsArea = props => {
    return (
        <>
            {/* Blog Details Area Start */}
            <section id="blog-details-main-area" className="py100">
                <div className="container">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </section>
            {/* Blog Details Area End */}
        </>
    )
}

export default BlogDetailsArea
