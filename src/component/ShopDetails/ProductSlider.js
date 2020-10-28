import React from 'react'
import img1 from '../../assets/img/shop/d-1.png'
import ProductSliderData from '../ShopDetails/ProductSliderData'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const ProductSlider = () => {
 
const ProductDatasSlider=(val)=>{
  return <div className="shop-details-img">
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

<OwlCarousel className="owl-theme" responsive={resposive} autoplay={true} autoplayHoverPause={true}autoplayTimeout={2500} items={5}  loop={true} margin={10} nav={false} dots={true}>
            {ProductSliderData.map(ProductDatasSlider)}
					
</OwlCarousel>
   		
  </>
 )
}

export default ProductSlider
