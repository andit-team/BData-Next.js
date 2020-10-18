import React from 'react'
import Header from '../../layout/Header'
import Banner from '../../component/Home01/Banner/Banner'
import Partner from '../../component/Home01/Partner/Partner'
import AboutOne from '../../component/Home01/About/AboutOne'
import AboutTwo from '../../component/Home01/About/AboutTwo'
import OurServices from '../../component/Home01/OurService/OurServices'
import Project from '../../component/Home01/Project/Project'
import Pricing from '../../component/Home01/Pricing/Pricing'
import Testimonial from '../../component/Home01/Testimonials/Testimonial'
import Blog from '../../component/Home01/Blog/Blog'
import WorkingProcess from '../../component/Home01/OurWorkingProcess/WorkingProcess'

const Home=()=> {
 return (
  <>
  <Header/>
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
