import React from 'react'
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ContactInfo = () => {
 return (
  <>
          <div className="contact-content">
                        <h3>Contact Here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis nemo pariatur harum
                            dolore.</p>
                        <ul className="contact-info">
                            <li>
                                <div className="media">
                                    <div className="icon-area"><i><MdPermPhoneMsg/></i></div>
                                    <div className="media-body contact-info-here">
                                        <h5><Link to="/#">+0-123-456-789</Link></h5>
                                        <h5><Link to="/#">+0-123-456-789</Link></h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <div className="icon-area"><i><ImLocation2/></i></div>
                                    <div className="media-body contact-info-here">
                                        <h5>Ranlon Market 789 Road, Market Street,Newyork</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <div className="icon-area"> <i><BiMailSend/></i></div>
                                    <div className="media-body contact-info-here">
                                        <h5><Link to="/#">info@mail.com</Link></h5>
                                        <h5><Link to="/#">info@mail.com</Link></h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
  </>
 )
}

export default ContactInfo
