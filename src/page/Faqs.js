import React from 'react'
import CommonBanner from '../component/Common/Banner'
import AllFacts from "../component/Faqs";

const Faqs = () => {
    return (
        <>
            <CommonBanner heading="Faqs" menu1="Home" menu2="Faqs"/>
            <AllFacts/>
        </>
    )
}

export default Faqs
