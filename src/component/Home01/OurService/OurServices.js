import React from 'react'
// Import Components
import SectionHeading from '../SectionHeading/SectionHeading' 
import OurServiceData from '../OurService/OurServicesData'
import OurServiceCard from '../OurService/OurServiceCard'

const OurServices=()=> {
 const ServiceDataMap = (val,index)=>{
return <OurServiceCard icon={val.img} key={index} heading={val.heading} para={val.paragraph} button={val.button}/>}
return (
  <>
  {/* Service Area Start */}
    <section id="service" className="bg-color">
        <div className="container">
            <SectionHeading title="Our Services" heading={"We Offer A Wide Range Of Data Services And Data Analytics Solutions"}/>
            <div className="row">
                {OurServiceData.map(ServiceDataMap)}
            </div>
        </div>
    </section>
      {/* Service Area End */}
  </>
 )
}

export default OurServices
