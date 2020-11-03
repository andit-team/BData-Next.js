import React from 'react'
import PartnerData from '../Partner/PartnerData'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Partner=()=> {

    let resposive = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      }

 const DatasMap=(val)=>{
  return  <Link to="/#"><img src={val.img} alt="img" /></Link>
 }
 
 return (
  <>
     <section id="partner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="logo-area-heading text-center pb30">
                        <h3>Trusted by Innovative Companies</h3>
                    </div>
                    <div className="logo-area">
                        <div className="slider-logo">
                        <OwlCarousel className="owl-theme" responsive={resposive} autoplay={true} autoplayHoverPause={true}autoplayTimeout={2500} items={5}  loop={true} margin={10} nav={false} dots={false}>
                        {PartnerData.map(DatasMap)}
                        </OwlCarousel>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default Partner
