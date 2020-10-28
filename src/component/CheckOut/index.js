import React from 'react'
import BillingInfo from '../CheckOut/BillingsInfo'
import OrderInfo from '../CheckOut/OrderInfo'
import PaymentInfo from '../CheckOut/PaymentInfo'


const index = () => {
 return (
  <>
    <section id="checkout-area" className="py100 bg-color">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <BillingInfo/>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                   <OrderInfo/>
                   <PaymentInfo/>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default index
