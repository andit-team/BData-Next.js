import React from 'react'
import TestimonialsData from '../Testimonials/TestimonialsData'
import TestimonialsItems from '../Testimonials/TestimonialsItems'
import SectionHeading from '../../Home01/SectionHeading/SectionHeading' 

// Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const index=()=> {
    let resposive = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 2,
        },
      }
const mapsData =(val, index)=>{
 return <TestimonialsItems para={val.para} img={val.img} name={val.name} des={val.des} key={index}/>
}
 return (
  <>
    <section id="one-testimonial" className="py100 bg-color">
        <div className="container">
            <SectionHeading title="Testimonials" heading="What Our Client Say"/>
            <div className="row">
                <div className="col-lg-12">
                    <div className="testimonials-slider-area">
                    <OwlCarousel className="owl-theme" responsive={resposive} autoplay={true} autoplayHoverPause={true}autoplayTimeout={2500} loop={true} margin={10} nav={true} dots={false}>
                    {TestimonialsData.map(mapsData)}
                        </OwlCarousel>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default index
