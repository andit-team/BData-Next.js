import React from 'react'
import shap from '../assets/img/svg/footer.svg'
import logo from '../assets/img/logo.png'
import { ImLocation } from 'react-icons/im';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';


const Footer=()=> {
 return (
  <>
    <footer id="footer" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-about-area">
                        <a href="index.html"><img src={logo} alt="img" /></a>
                        <p className="pt30">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut.
                        </p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                   <div className="footer-list-wedget pl20 single-item-mt-3 responsive-mt-60">
                       <div className="fooote-heading">
                           <h5>Usefull Links</h5>
                       </div>
                       <div className="footer-list pt40">
                           <ul>
                               <li><a href="index.html">Home </a></li>
                               <li><a href="faqs.html"> Faqs</a></li>
                               <li><a href="shop.html"> Shop</a></li>
                               <li><a href="blog.html"> News</a></li>
                           </ul>
                          
                       </div>
                   </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                    <div className="footer-list-wedget pl20 single-item-mt-3 responsive-mt-60">
                        <div className="fooote-heading">
                            <h5>Services</h5>
                        </div>
                        <div className="footer-list pt40">
                           <ul>
                               <li><a href="about.html">About</a></li>
                               <li><a href="service.html">Service</a></li>
                               <li><a href="about.html"> Features</a></li>
                               <li><a href="contact.html"> Contact Us</a></li>
                               <li><a href="privacy-policy.html"> Praivcy Policy</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-list-wedget pl20 responsive-mt-60">
                        <div className="fooote-heading">
                            <h5>Contact Info</h5>
                        </div>
                        <div className="footer-contact-area footer-list pt40">
                           <ul>
                               <li>
                                   <i><ImLocation/></i> 1101, Your street adress, New york, State, Country.
                               </li>
                               <li>
                                   <i><FiPhoneOutgoing/></i><a href="tel:012-3-456-789">+012 -3 456 789</a>
                               </li>
                               <li>
                                   <i><SiMinutemailer/></i><a href="malto:info@gmail.com">Info@gmail.com</a>
                               </li>
                           </ul>
                       </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-img">
               <img src={shap} alt="img" />
        </div>
    </footer>
  </>
 )
}

export default Footer
