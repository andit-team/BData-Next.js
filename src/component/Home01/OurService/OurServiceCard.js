import React from 'react'

function OurServiceCard(props) {
 return (
  <>
   <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <div className="service-box animation-trnslate box-shadow border-radius">
                        <div className="service-box-inner text-center">
                            <img src={props.icon} alt="img" />
                            <h3><a href="#!">{props.heading}</a></h3>
                            <p>{props.para}</p>
                            <a href="#!">{props.button}</a>
                        </div>
                    </div>
                </div>
  </>
 )
}

export default OurServiceCard
