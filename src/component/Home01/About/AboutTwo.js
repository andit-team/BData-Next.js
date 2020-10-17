import React from 'react'
import small1 from '../../../assets/img/small-icon/1.png'
import small2 from '../../../assets/img/small-icon/2.png'
import small3 from '../../../assets/img/small-icon/3.png'
import AboutImg from '../../../assets/img/about/2.png'

const AboutTwo=()=> {
 return (
  <>
     <section id="about-area-two" className="bg-color">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="anitmation-img animation-img-one">
                        <img src={AboutImg} alt="img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-side-about">
                        <h2>Check Our Awesome Features Here</h2>
                        <div className="right-area-about-list">
                            <div className="media">
                                <img className="mr-3" src={small1} alt="image" />
                                <div className="media-body">
                                    <h3 className="mt-0">Save Your Time</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                            <div className="media  media wow fadeInUp " data-wow-duration="2.0s " data-wow-delay=".2s ">
                                <img className="mr-3 " src={small2} alt="image " />
                                <div className="media-body ">
                                    <h3 className="mt-0 ">Manage Business Easily</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                            <div className="media  media wow fadeInUp" data-wow-duration="2.0s" data-wow-delay=".3s">
                                <img className="mr-3" src={small3} alt="image" />
                                <div className="media-body">
                                    <h3 className="mt-0">Trusted Partner</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default AboutTwo
