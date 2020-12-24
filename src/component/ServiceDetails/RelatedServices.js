import React from 'react'
import Icon1 from '../../assets/img/service/1.png'
import Icon2 from '../../assets/img/service/2.png'
import Icon3 from '../../assets/img/service/3.png'
import {Link} from 'react-router-dom';
import {OurServiceData} from "../Home/OurService/OurServicesData";
import OurServiceCard from "../Home/OurService/OurServiceCard";

const RelatedServices = () => {
    return (
        <>
            <section id="service-slider" className="py100 bg-color">
                <div className="container">
                    <div className="row">
                        {OurServiceData.slice(0,3).map( (data, index)=>( <OurServiceCard data={data} key={index}/> ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedServices
