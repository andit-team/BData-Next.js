import React from 'react'
import { Link } from 'react-router-dom';
// Import Icon
import { FaComments } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const BlogCard=(props)=> {
 return ( 
  <>
  {/* Blog Card Area Strat */}
            <div className="blog-wedget box-shadow">
            <div className="blog-wedget-img">
            <Link to="/blogdetails">
            <img src={props.data.img} alt="img" />
            </Link>
            </div>
            <div className="blog-wedget-text">
            <div className="blog-wedget-heading">
            <h2><Link to="/blogdetails">{props.data.heading}</Link></h2>
            </div>
            <div className="blog-wedget-author">
            <div className="blog-author-view">
            <ul>
            <li><Link to="/blogdetails">{props.data.category}</Link>
            </li>
            <li><Link to="#!"><i><FaComments/></i>{props.data.comment}</Link>
            </li>
            <li><Link to="#!"><i><GrView/></i>{props.data.view}</Link>
            </li>
            </ul>
            </div>
            <div className="blog-author-date">
            <ul>
            <li>{props.data.date}</li>
            </ul>
            </div>
            </div>
            <div className="blog-wedget-paragraph">
            <p>{props.data.para}</p>
            </div>
            <div className="blog-wedget-button"> <Link to="/blogdetails" className="btn btn-theme">{props.data.button}</Link>
            </div>
            </div>
            </div>
            {/* Blog Card Area End */}
  </>
 )
}

export default BlogCard
