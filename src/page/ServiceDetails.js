import React from 'react'
import Header from '../layout/Header'
import Banner from '../component/Common/Banner/index'
import DetailsArea from '../component/ServiceDetails/DetailsArea'
import DetailsCard from '../component/ServiceDetails/DetailsCard'
import DetailsBottom from '../component/ServiceDetails/DetailsBottom'

const ServiceDetails=()=> {
 return (
  <>
  <Header/>
  <Banner heading="Service Details" menu1="Home" menu2="Service Details"/>
  <DetailsArea/>
  <DetailsCard/>
  <DetailsBottom/>
  </>
 )
}

export default ServiceDetails