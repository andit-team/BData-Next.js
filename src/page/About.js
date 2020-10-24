import React from 'react'
import Banner from '../component/Common/Banner/index'
import History from '../component/About/History'
import GetStarted from '../component/Common/GetStarted/index'
import Counter from '../component/Common/Counter/index'
import Testimonials from '../component/Common/Testimonials/index'
import Team from '../component/About/Team/index'
const About=()=> {
 return (
  <>
   <Banner  heading="About" menu1="Home" menu2="About"/>
   <History/>
   <GetStarted/>
   <Counter/>
  <Team/>
   <Testimonials/>
  </>
 )
}

export default About
