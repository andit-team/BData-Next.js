import React from 'react'
import CommonBanner from '../component/Common/Banner'
import OurServices from '../component/Home/OurService/OurServices'
import GetStarted from '../component/Common/GetStarted/index'
import Counter from '../component/Common/Counter/index'
import Blog from '../component/Home/Blog/Blog'

const Service = () => {
    return (
        <>
            <CommonBanner heading="Service" menu1="Home" menu2="Service"/>
            <OurServices/>
            <GetStarted/>
            <Counter/>
            <Blog/>
        </>
    )
}

export default Service
