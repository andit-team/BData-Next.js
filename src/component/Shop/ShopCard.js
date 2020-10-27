import React from 'react'
import { Link } from 'react-router-dom';

const ShopCard = (props) => {
 return (
  <>
   		<div className="col-lg-3 col-md-6 col-sm-6 col-12">
					<div className="shop-item responsive-mt text-center">
						<div className="shop-img">
							<img src={props.img} alt="img" />
						</div>
						<div className="shop-info box-shadow">
							<h3><a href="shop-details.html">{props.name}</a></h3>
							<p><span>${props.price}</span>
							</p> <Link to="/shopdetails" className="btn btn-theme btn-shop">{props.button}</Link>
						</div>
					</div>
				</div>
  </>
 )
}

export default ShopCard