import React from 'react'

import Banner from '../component/Home/Banner/Banner'
import Partner from '../component/Home/Partner/Partner'
import AboutOne from '../component/Home/About/AboutOne' 
import AboutTwo from '../component/Home/About/AboutTwo'
import OurServices from '../component/Home/OurService/OurServices'
import Project from '../component/Home/Project/Project'
import Pricing from '../component/Home/Pricing/Pricing'
import Testimonial from '../component/Common/Testimonials/index'
import Blog from '../component/Home/Blog/Blog'
import WorkingProcess from '../component/Home/OurWorkingProcess/WorkingProcess'

const Home=()=> {
 return (
  <> 

   <Banner/>
   <Partner/>
   <OurServices/>
   <AboutOne/>
   <AboutTwo/>
   <WorkingProcess/>
   <Project/>
   <Pricing/>
   <Testimonial/>
   <Blog/>
  </>
 )
}

export default Home
