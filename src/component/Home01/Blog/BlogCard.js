import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard=(props)=> {
 return (
  <>
   <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="blog-item single-item-mt-2">
                        <div className="blog-img">
                            <Link to="/blogdetails"><img src={props.img} alt="img" /></Link>
                        </div>
                        <div className="blog-details">
                            <div className="date-time">
                                <h3>{props.date}</h3>
                                <p>{props.month}</p>
                            </div>
                            <h3>
                           <Link to="/blogdetails">{props.heading}</Link>
                            </h3>
                            <p className="pt10">
                                {props.para}
                            </p>
                            <div className="blog-author-details">
                                <div className="author-img pt10">
                                    <Link to="/blogdetails"><img src={props.authorimg} alt="img" /> {props.authorName}
                                    </Link>
                                    <Link to="/blogdetails">{props.catatory}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  </>
 )
}

export default BlogCard
