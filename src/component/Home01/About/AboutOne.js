 import React from 'react'
 import check from '../../../assets/img/about/tick.png'
 import AboutImg from '../../../assets/img/about/1.png'
 
 const AboutOne=()=> {
  return (
   <>
     <section id="about" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="left-side-title">
                        <h3>About Company</h3>
                        <h2 className="pt10">
                            We Provide Real Time Data Solutions, Analysis, Analytics And Prediction
                        </h2>
                    </div>
                    <div className="about-detauls pt10">
                        <p>
                            Dolor sit amet consectetur elit sed eiusmod tempor incidi dunt labore dolore magna aliqua
                            enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.
                        </p>
                        <ul className="pt20">
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img src={check} alt="img" />Various Analysis Options
                            </li>
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img src={check} alt="img" />Professional Consultancy Service
                            </li>
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img src={check} alt="img" />Advanced Advisory Team
                            </li>
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img src={check} alt="img" />24/7 Support Centers
                            </li>
                        </ul>
                        <a href="#!" className="btn btn-theme mt30">How It Work</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="anitmation-img animation-img-one">
                        <img src={AboutImg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
 }
 
 export default AboutOne
 