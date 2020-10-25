import React from 'react'
import Sidebar from '../Blog/Sidebar'
import img1 from '../../assets/img/blog/post1.jpg'
import commentImg from '../../assets/img/comment/1.png'
import { FaComments } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";
import { AiOutlineGooglePlus } from "react-icons/ai";

const index=()=> {
 return (
  <>
     <section id="blog-details-main-area" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="blog-details-arae">
                        <div className="blog-main-details box-shadow ">
                            <div className="blog-details-img">
                                <img src={img1} alt="img" />
                            </div>
                            <div className="blog-wedget-text">
                                <div className="blog-wedget-heading">
                                    <h2><a href="#!">Check out the best themes of the last year</a></h2>
                                </div>
                                <div className="blog-wedget-author">
                                    <div className="blog-author-view">
                                        <ul>
                                            <li><a href="#!">Software</a>
                                            </li>
                                            <li><a href="#!"><i> <FaComments/></i> 05</a>
                                            </li>
                                            <li><a href="#!"><i> <GrView/></i> 68</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-author-date">
                                        <ul>
                                            <li>March 14th 2020</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-wedget-paragraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                        Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                        fugit distinctio dolores ad corporis doloribus consectetur.
                                        Lorem ipsum dolor sit, amet</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                        Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                        fugit distinctio dolores ad corporis doloribus consectetur.
                                        Lorem ipsum dolor sit, amet</p>
                                    <h3>How to install the web theme</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                        Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                        fugit distinctio dolores ad corporis doloribus consectetur.
                                        Lorem ipsum dolor sit, amet</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                        Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                        fugit distinctio dolores ad corporis doloribus consectetur.
                                        Lorem ipsum dolor sit, amet</p>
                                </div>
                             
                            </div>
                            <div className="blog-share-area">
                                <ul>
                                    <li>Share this:</li>
                                    <li><a href="#!" className="social-icon"><i><FaFacebookF/></i></a>
                                    </li>
                                    <li><a href="#!" className="social-icon"><i><AiOutlineTwitter/></i></a>
                                    </li>
                                    <li><a href="#!" className="social-icon"><i><MdRssFeed/></i></a>
                                    </li>
                                    <li><a href="#!" className="social-icon"><i><AiOutlineGooglePlus/></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="media-author box-shadow">
                            <ul>
                                <li className="media">
                                    <div className="media-img">
                                        <img src={commentImg} alt="img" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-header">
                                            <div className="media-name">
                                                <h4>Aysha Rane</h4>
                                                <p>Post author</p>
                                            </div>
                                            <div className="post-share"> <a href="#!" className="social-icon"><i><FaFacebookF/></i></a>
                                                <a href="#!" className="social-icon"><i><AiOutlineTwitter/></i></a>
                                            </div>
                                        </div>
                                        <div className="media-pragraph">
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at. turpis.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="comment-arae-post box-shadow">
                            <div className="comment-area-heading">
                                <h3>Comments (4)</h3>
                            </div>
                            <div className="media-public ">
                                <ul>
                                    <li className="media">
                                        <div className="media-img">
                                            <img src={commentImg} alt="img" />
                                        </div>
                                        <div className="media-body">
                                            <div className="media-header">
                                                <div className="media-name">
                                                    <h4>Aysha Rane</h4>
                                                    <p>5 days ago</p>
                                                </div>
                                                <div className="post-share"> <a href="#!" className="replay">Replay</a>
                                                    <a href="#!" className="">Report</a>
                                                </div>
                                            </div>
                                            <div className="media-pragraph">
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                    vulputate at. turpis.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="media-img">
                                            <img src={commentImg} alt="img" />
                                        </div>
                                        <div className="media-body">
                                            <div className="media-header">
                                                <div className="media-name">
                                                    <h4>Aysha Rane</h4>
                                                    <p>2 days ago</p>
                                                </div>
                                                <div className="post-share"> <a href="#!" className="replay">Replay</a>
                                                    <a href="#!" className="">Report</a>
                                                </div>
                                            </div>
                                            <div className="media-pragraph">
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                    vulputate at. turpis.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="media-img">
                                            <img src={commentImg} alt="img" />
                                        </div>
                                        <div className="media-body">
                                            <div className="media-header">
                                                <div className="media-name">
                                                    <h4>Aysha Rane</h4>
                                                    <p>1 days ago</p>
                                                </div>
                                                <div className="post-share"> <a href="#!" className="replay">Replay</a>
                                                    <a href="#!" className="">Report</a>
                                                </div>
                                            </div>
                                            <div className="media-pragraph">
                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                    vulputate at. turpis.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="comment-arae-post box-shadow">
                            <div className="comment-area-heading">
                                <h3>Leave a Reply</h3>
                            </div>
                            <div className="leave-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                    placeholder="Your Email Heare....." required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" rows="5" placeholder="Messages Heare..."
                                                    required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="submit-btn">
                                                <input type="submit" className="btn btn-theme" value="Submit" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
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
