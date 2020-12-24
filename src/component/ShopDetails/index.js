import React from 'react'
import ProductDetails from '../ShopDetails/ProductDetails'
import ProductTabs from '../ShopDetails/ProductTabs'
import RelatedProduct from '../ShopDetails/RelatedProduct'

const ShopDetailsWrapper = () => {
    return (
        <>
            <ProductDetails/>
            <ProductTabs/>
            <RelatedProduct/>
        </>
    )
}

export default ShopDetailsWrapper
