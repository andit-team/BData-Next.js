import React from 'react'
import side1 from '../../assets/img/blog/recent-post/1.png'
import side2 from '../../assets/img/blog/recent-post/2.png'
import side3 from '../../assets/img/blog/recent-post/3.png'

const Sidebar = () => {
 return (
  <>
                       <div className="left-head-blog right-side">
                        <div className="left-blog-page box-shadow">
                            <form action="#">
                                <div className="blog-search-option">
                                    <input type="text" placeholder="Search..." />
                                    <button className="button" type="submit"> <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div className="left-blog-page box-shadow">
                            <div className="left-blog">
                                <h4>categories</h4>
                                <ul>
                                    <li><a href="#">Business</a><span>12</span>
                                    </li>
                                    <li><a href="#">Agency </a><span>17</span>
                                    </li>
                                    <li><a href="#">Media</a><span>07</span>
                                    </li>
                                    <li><a href="#">Social</a><span>21</span>
                                    </li>
                                    <li><a href="#">Photoshop</a><span>14</span>
                                    </li>
                                    <li><a href="#">development</a><span>10</span>
                                    </li>
                                    <li><a href="#">Design</a><span>15</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="left-blog-page box-shadow">
                            <div className="left-blog">
                                <h4>recent post</h4>
                                <div className="recent-post">
                                    <div className="recent-single-post">
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={side1} alt="img" />
                                            </a>
                                        </div>
                                        <div className="pst-content">
                                            <p><a href="#">We offer professional Consultant services.</a>
                                            </p> <span className="date-type">
                                                26 Jan / 2018
                                            </span>
                                        </div>
                                    </div>
                                    <div className="recent-single-post">
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={side2} alt="img" />
                                            </a>
                                        </div>
                                        <div className="pst-content">
                                            <p><a href="#">Montril is an firm and general group.</a>
                                            </p> <span className="date-type">
                                                20 June / 2018
                                            </span>
                                        </div>
                                    </div>

                                    <div className="recent-single-post">
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={side3} alt="img" />
                                            </a>
                                        </div>
                                        <div className="pst-content">
                                            <p><a href="#">Business man always think positive.</a>
                                            </p> <span className="date-type">
                                                26 Feb / 2018
                                            </span>
                                        </div>
                                    </div>

                                    <div className="recent-single-post">
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={side1} alt="img" />
                                            </a>
                                        </div>
                                        <div className="pst-content">
                                            <p><a href="#">Man can change business policy all time.</a>
                                            </p> <span className="date-type">
                                                13 Nov / 2018
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-blog-page box-shadow">
                            <div className="left-tags blog-tags">
                                <div className="popular-tag left-side-tags left-blog">
                                    <h4>popular tags</h4>
                                    <ul>
                                        <li><a href="#">Business</a>
                                        </li>
                                        <li><a href="#">Agency </a>
                                        </li>
                                        <li><a href="#">Media</a>
                                        </li>
                                        <li><a href="#">Social</a>
                                        </li>
                                        <li><a href="#">Photoshop</a>
                                        </li>
                                        <li><a href="#">Seo</a>
                                        </li>
                                        <li><a href="#">development</a>
                                        </li>
                                        <li><a href="#">Search</a>
                                        </li>
                                        <li><a href="#">Design</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
  </>
 )
}

export default Sidebar
