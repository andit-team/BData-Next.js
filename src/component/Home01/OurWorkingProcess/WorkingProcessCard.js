import React from 'react'
import { Link } from 'react-router-dom';

const WorkingProcessCard=(props)=> {
 return (
  <>
   <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="work-process-item  animation-trnslate text-center box-shadow border-radius responsive-mt-60">
                        <div className="work-process-img box-shadow ">
                            <img src={props.img} alt="image" />
                        </div>
                        <div className="work-process-details ">
                               <h3><Link to="/#">{props.heading}</Link></h3>
                            <p className="pt10">
                            {props.para}
                            </p>
                            <Link to="/#">{props.button}</Link>
                        </div>
                    </div>
                </div>
  </>
 )
}

export default WorkingProcessCard
