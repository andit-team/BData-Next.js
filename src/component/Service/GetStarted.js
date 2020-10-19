import React from 'react'
import img1 from '../../assets/img/project-details/2.png'

const GetStarted=()=> {
 return (
  <>
    <section id="service-dec" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="service-dec-img animation-img-two">
                        <img src={img1} alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="service-dec-right-side">
                        <div className="left-side-title">
                            <h3>Let's Get Started</h3>
                            <h2 className="pt10">
                                Are you ready for a better, more productive business
                            </h2>
                        </div>
                        <div className="service-dec-left-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque atque earum
                                magnam ratione obcaecati. Voluptatum magni, veritatis minima autem omnis suscipit
                                cumque, aperiam necessitatibus, aliquid qui nisi voluptatem
                                est.
                            </p> <a href="#!" className="btn btn-theme">Get Started Project</a>
                            <a href="#!" className="btn btn-theme">Contact With Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default GetStarted