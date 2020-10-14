import React from 'react'
import img_banner from '../../../assets/img/ss.svg'
import { AiOutlinePlayCircle } from 'react-icons/ai';

const Banner =() => {
 return (
  <>
    <section id="banner-one">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="home-one-banner-content">
                        <h1>Big Data & Analytics</h1>
                        <h2>Innovative Solutions</h2>
                        <p>
                            Real-time data management technologies, global data market places, and award-winning service
                            make our solutions.
                        </p>
                        <div className="banner-one-btn pt30">
                            <a href="#!" className="btn btn-theme">Get Started</a>
                            <a href="https://www.youtube.com/embed/Kb8CW3axqRE" className="banner-video video-link"
                                data-width="1200" data-height="1080"><AiOutlinePlayCircle/> Watch Video</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="banner-img">
                        <img src={img_banner} className="wow zoomIn" data-wow-duration="2.0s" data-wow-delay=".6s"
                            alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default Banner
