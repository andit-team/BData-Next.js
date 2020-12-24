import React from 'react'
import CommonBanner from '../component/Common/Banner'
import DetailsArea from '../component/ServiceDetails/DetailsArea'
import DetailsCard from '../component/ServiceDetails/DetailsCard'
import DetailsBottom from '../component/ServiceDetails/DetailsBottom'

const ServiceDetails = () => {
    return (
        <>
            <CommonBanner heading="Service Details" menu1="Home" menu2="Service Details"/>
            <DetailsArea/>
            <DetailsCard/>
            <DetailsBottom/>
        </>
    )
}

export default ServiceDetails
