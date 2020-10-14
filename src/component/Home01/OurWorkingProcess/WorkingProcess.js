import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import WorkingProcessCard from '../OurWorkingProcess/WorkingProcessCard'
import WorkingProcessData from '../OurWorkingProcess/WorkingProcessData'

const WorkingProcess=()=> {
 const WorkinDatas=(val)=>{
  return <WorkingProcessCard img={val.img} heading={val.heading} para={val.para} button={val.button} />
 }
 return (
  <>
    <section id="work-process" className="py100">
        <div className="container">
           <SectionHeading title="Our Working Process" heading="Data Science Solutions For Startup"/>
            <div className="row">

           
             {WorkingProcessData.map(WorkinDatas)}
                
            </div>
        </div>
    </section>
  </>
 )
}

export default WorkingProcess
