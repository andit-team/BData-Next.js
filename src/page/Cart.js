import React from 'react'
import CommonBanner from '../component/Common/Banner'
import CartWrapper from '../component/Cart'

const Cart = () => {
    return (
        <>
            <CommonBanner heading="Cart" menu1="Home" menu2="Cart"/>
            <CartWrapper/>
        </>
    )
}

export default Cart
