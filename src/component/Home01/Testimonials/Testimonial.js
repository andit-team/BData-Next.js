import React from 'react'
import TestimonialsData from '../Testimonials/TestimonialsData'
import TestimonialsItems from '../Testimonials/TestimonialsItems'

const Testimonial=()=> {
const mapsData =(val)=>{
 return <TestimonialsItems para={val.para} img={val.img} name={val.name} des={val.des}/>
}
 return (
  <>
    <section id="one-testimonial" className="py100 bg-color">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title-center text-center pb30">
                        <h3 className="pb10">Testimonials</h3>
                        <h2>What Our Client Say</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="testimonials-slider-area">
                       {TestimonialsData.map(mapsData)}
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default Testimonial
