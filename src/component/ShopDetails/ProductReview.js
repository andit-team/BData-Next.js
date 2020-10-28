import React from 'react'

const ProductReview = (props) => {
 return (
  <>
   	<li className="media">
												<div className="media-img">
													<img src={props.img} alt="img" />
												</div>
												<div className="media-body">
													<div className="media-header">
														<div className="media-name">
															<h4>{props.name}</h4>
															<p>{props.time}</p>
														</div>
														<div className="post-share"> <a href="#!" className="replay">{props.replay}</a>
															<a href="#!">{props.report}</a>
														</div>
													</div>
													<div className="media-pragraph">
														<p>{props.comment}</p>
													</div>
												</div>
											</li>
  </>
 )
}

export default ProductReview
