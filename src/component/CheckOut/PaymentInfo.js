import React from 'react'

const PaymentInfo = () => {
 return (
  <>
                       <div className="order_review  box-shadow bg-white">
                        <div className="check-heading">
                            <h3>Payment</h3>
                        </div>
                        <div className="payment_method">
                            <div className="payment_option">
                                <div className="custome-radio">
                                    <input className="form-check-input" required="" type="radio" name="payment_option"
                                        id="exampleRadios3" value="option3" />
                                    <label className="form-check-label" for="exampleRadios3">Direct Bank Transfer</label>
                                    <p data-method="option3" className="payment-text">There are many variations of passages
                                        of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                                <div className="custome-radio">
                                    <input className="form-check-input" type="radio" name="payment_option"
                                        id="exampleRadios4" value="option4" />
                                    <label className="form-check-label" for="exampleRadios4">Check Payment</label>
                                    <p data-method="option4" className="payment-text">Please send your cheque to Store Name,
                                        Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>
                                <div className="custome-radio">
                                    <input className="form-check-input" type="radio" name="payment_option"
                                        id="exampleRadios5" value="option5" />
                                    <label className="form-check-label" for="exampleRadios5">Paypal</label>
                                    <p data-method="option5" className="payment-text">Pay via PayPal; you can pay with your
                                        credit card if you don't have a PayPal account.</p>
                                </div>
                            </div>
                        </div> <a href="#" className="btn btn-theme">Place Order</a>
                    </div>
  </>
 )
}

export default PaymentInfo
