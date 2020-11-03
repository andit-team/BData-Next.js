import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import img1 from '../../assets/img/comment/1.png'

const AuthorPost = () => {
 return (
  <>
                                   <li className="media">
                                    <div className="media-img">
                                        <img src={img1} alt="img" />
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
  </>
 )
}

export default AuthorPost
