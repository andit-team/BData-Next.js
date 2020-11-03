import React from 'react'
import { Link } from 'react-router-dom'

function OurServiceCard(props) {
 return (
  <>
   <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <div className="service-box animation-trnslate box-shadow border-radius">
                        <div className="service-box-inner text-center">
                            <img src={props.icon} alt="img" />
                            <h3><Link to="/servicedetails">{props.heading}</Link></h3>
                            <p>{props.para}</p>
                            <Link to="/servicedetails">{props.button}</Link>
                        </div>
                    </div>
                </div>
  </>
 )
}

export default OurServiceCard
