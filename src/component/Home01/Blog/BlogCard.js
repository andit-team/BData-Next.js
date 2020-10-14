import React from 'react'

function BlogCard(props) {
 return (
  <>
   <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="blog-item single-item-mt-2">
                        <div className="blog-img">
                            <a href="#!"><img src={props.img} alt="img" /></a>
                        </div>
                        <div className="blog-details">
                            <div className="date-time">
                                <h3>{props.date}</h3>
                                <p>{props.month}</p>
                            </div>
                            <h3>
                           <a href="#!">{props.heading}</a>
                            </h3>
                            <p className="pt10">
                                {props.para}
                            </p>
                            <div className="blog-author-details">
                                <div className="author-img pt10">
                                    <a href="#!"><img src={props.authorimg} alt="img" /> {props.authorName}
                                    </a>
                                    <a href="#!">{props.catatory}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  </>
 )
}

export default BlogCard
