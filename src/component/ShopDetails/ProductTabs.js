import React from 'react'
// Import Components
import ProductReview from '../ShopDetails/ProductReview'
import {ProductReviewData} from '../ShopDetails/ProductReviewData'

const ProductTabs = () => {
    const ProductDatas = (val, index) => {
        return <ProductReview img={val.img} key={index} name={val.name} time={val.time} replay={val.replay}
                              report={val.report} comment={val.comment}/>
    }
    return (
        <>
            {/* Shop Items Area Start */}
            <section id="shop-items-details" className="pb100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-details-tabs">
                                <div className="product-tabs-header">
                                    <ul className="nav nav-tabs">
                                        <li><a className="active" data-toggle="tab" href="#description">Description</a>
                                        </li>
                                        <li><a data-toggle="tab" href="#review">Review (2)</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-details-tabs-review box-shadow">
                                    <div className="tab-content">
                                        <div id="description" className="tab-pane active">
                                            <h3>Description</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Facilis, ducimus omnis voluptates
                                                doloremque
                                                perspiciatis enim vel, debitis vero adipisci libero ipsam quisquam
                                                expedita
                                                autem odio provident nulla vitae voluptate reprehenderit.</p>
                                        </div>
                                        <div id="review" className="tab-pane fade">
                                            <div className="media-public ">
                                                <ul>
                                                    {ProductReviewData.map(ProductDatas)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Items Area End */}
        </>
    )
}

export default ProductTabs
