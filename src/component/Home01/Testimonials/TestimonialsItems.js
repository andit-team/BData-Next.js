import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsItems=(props)=> {
 return (
  <>
    <div className="testimonial-box box-shadow border-radius">
                            <div className="testimonial-comment ">
                                <i><FaQuoteLeft/></i>
                                <p>{props.para}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="testimonial-author-img">
                                    <img src={props.img} alt="img" />
                                </div>
                                <div className="testimonial-name">
                                    <h3>{props.name}</h3>
                                     <p>{props.des}</p>
                                </div>
                            </div>
                        </div>
  </>
 )
}

export default TestimonialsItems
