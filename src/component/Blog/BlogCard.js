import React from 'react'
import { Link } from 'react-router-dom';
import { FaComments } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const BlogCard=(props)=> {
 return (
  <>
                           <div className="blog-wedget box-shadow">
                            <div className="blog-wedget-img">
                                <Link to="/blogdetails">
                                    <img src={props.img} alt="img" />
                                </Link>
                            </div>
                            <div className="blog-wedget-text">
                                <div className="blog-wedget-heading">
                                 <h2><Link to="/blogdetails">{props.heading}</Link></h2>
                                </div>
                                <div className="blog-wedget-author">
                                    <div className="blog-author-view">
                                        <ul>
                                          <li><Link to="/blogdetails">{props.category}</Link>
                                            </li>
                                             <li><Link to="#!"><i><FaComments/></i>{props.comment}</Link>
                                            </li>
                                            <li><Link to="#!"><i><GrView/></i>{props.view}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-author-date">
                                        <ul>
                                            <li>{props.date}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-wedget-paragraph">
                                    <p>{props.para}</p>
                                </div>
                                <div className="blog-wedget-button"> <Link to="/blogdetails" className="btn btn-theme">{props.button}</Link>
                                </div>
                            </div>
                        </div>
  </>
 )
}

export default BlogCard
