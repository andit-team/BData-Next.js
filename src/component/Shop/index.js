import React from 'react'
// Import Component
import {ShopData} from './ShopData'
import ShopCard from '../Shop/ShopCard'
// Import Icon
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";

const index = () => {
    const ShopDatas = (val, index) => {
        return <ShopCard img={val.img} name={val.name} price={val.price} button={val.button} key={index}/>
    }
    return (
        <>
            {/* Shop Area Start */}
            <section id="shop-area" className="py100">
                <div className="container">
                    <div className="row">
                        {ShopData.map(ShopDatas)}
                        <div className="col-lg-12 colmd-12">
                            <div className="pagantion-area">
                                <ul>
                                    <li><i><MdKeyboardArrowLeft/></i></li>
                                    <li className="active">1</li>
                                    <li>2</li>
                                    <li>....</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li><i><MdKeyboardArrowRight/></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Area End */}
        </>
    )
}

export default index
