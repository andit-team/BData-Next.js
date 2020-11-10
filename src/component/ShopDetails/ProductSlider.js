import React from 'react'
// Import Component
import ProductSliderData from '../ShopDetails/ProductSliderData'
// Import Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const ProductSlider = () => {
 
const ProductDatasSlider=(val, index)=>{
  return <div className="shop-details-img"  key={index}>
           <img src={val.img} alt="img" />
           </div>
}

 let resposive = {
  0: {
    items: 1,
  },
  600: {
    items: 1,
  },
  960: {
    items: 1,
  },
  1200: {
    items: 1,
  },
}
 return (
  <>
{/* Slider Area Start */}
<OwlCarousel className="owl-theme" responsive={resposive} autoplay={true} autoplayHoverPause={true}autoplayTimeout={2500} items={5}  loop={true} margin={10} nav={false} dots={true}>
            {ProductSliderData.map(ProductDatasSlider)}		
</OwlCarousel>
  {/* Slider Area End */}		
  </>
 )
}

export default ProductSlider