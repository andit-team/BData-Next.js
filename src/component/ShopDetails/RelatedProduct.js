import React from 'react'
import ShopData from '../Shop/ShopData'
import ShopCard from '../Shop/ShopCard'

const RelatedProduct = () => {
 const ShopDatas=(val, index)=>{
  if(index < 4) {
     return <ShopCard img={val.img} name={val.name} price={val.price} button={val.button} />
  }
 
}
 return (
  <>
  <section id="related-arae" className="pb100">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="section-title-center text-center pb30">
						<h2>Related Product</h2>
					</div>
				</div>
			</div>
			<div className="row">
   {ShopData.map(ShopDatas)}
			</div>
		</div>
	</section>
  </>
 )
}

export default RelatedProduct
