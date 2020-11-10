import React from 'react'
// Import Icons
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
 return (
  <>
		{/* Register Area Start */}
   	<section id="login-area" className="py100">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="login-area">
						<div className="login-form-arae">
							<div className="form-area-heading text-center">
								<h3>Create An Account!</h3>
								<p>With your social network.</p>
							</div>
							<div className="social-login-area">
							<button type="submit"><i><AiOutlineGooglePlus/></i>
									Google</button>
								<button type="submit"><i><FaFacebookF/></i>
									Facebook</button>
								<button type="submit"><i><AiOutlineTwitter/></i>
									Twitter</button>
							</div>
							<form action="#">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="First Name" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Last Name" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Enter Your Username" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="password" className="form-control" placeholder="Password" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="password" className="form-control" placeholder="confrim Password" />
										</div>
									</div>
									<div className="col-lg-12 col-md-6 col-sm-12 col-12">
										<div className="pasword-remamber">
											<input type="checkbox" id="chb1" />
											<label htmlFor="chb1">I agree with Haipe's <Link to="/#">Privacy Policy</Link>
											</label>
										</div>
									</div>
									<div className="col-lg-12 col-md-6 col-sm-12 col-12">
										<div className="pasword-remamber">
											<input type="checkbox" id="chb2" />
											<label htmlFor="chb2">I agree with Haipe's <Link to="/#">Terms of Services</Link>
											</label>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="login-button">
											<button type="submit" className="btn btn-theme">Register Account</button>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="login-desc text-center">
											<p>Already have an account?<Link to="/login"> Login</Link>
											</p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
			{/* Register Area End */}
  </>
 )
}

export default RegisterForm
