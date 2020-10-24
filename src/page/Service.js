import React from 'react'
import Banner from '../component/Common/Banner/index'
import OurServices from '../component/Home01/OurService/OurServices'
import GetStarted from '../component/Common/GetStarted/index'
import Counter from '../component/Common/Counter/index'
import Blog from '../component/Home01/Blog/Blog'

const Service=()=> {
 return (
  <>
    <Banner heading="Service" menu1="Home" menu2="Service" /> 
    <OurServices/>
    <GetStarted/>
    <Counter/>
    <Blog/>

  </>
 )
}

export default Service
