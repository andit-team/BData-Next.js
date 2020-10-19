import React from 'react'
import Header from '../layout/Header'
import Banner from '../component/Common/Banner/index'
import OurServices from '../component/Home01/OurService/OurServices'
import GetStarted from '../component/Service/GetStarted'
import Counter from '../component/Service/Counter'
import Blog from '../component/Home01/Blog/Blog'

const Service=()=> {
 return (
  <>
    <Header/>
    <Banner heading="Service" menu1="Home" menu2="Service" /> 
    <OurServices/>
    <GetStarted/>
    <Counter/>
    <Blog/>

  </>
 )
}

export default Service
