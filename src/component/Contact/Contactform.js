import React from 'react'

const Contactform = () => {
 return (
  <>
   <div className="contact-form-arae box-shadow">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name" required />
                                    </div>
                                </div>
                                <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div className="col-lg-12  col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Your Mail Here...."
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <textarea className="form-control" rows="10" placeholder="Mesasges Here...."
                                            required></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-submit-button">
                                        <input type="submit" className="btn btn-theme" value="Submit" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
  </>
 )
}

export default Contactform
