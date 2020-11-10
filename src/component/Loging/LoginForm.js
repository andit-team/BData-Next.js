import React from 'react'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from 'react-router-dom';

const LoginForm = () => {
 return (
  <>
    <section id="login-area" className="py100">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="login-area">
						<div className="login-form-arae">
							<div className="form-area-heading text-center">
								<h3>Login To Your Account!</h3>
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
											<input type="text" className="form-control" placeholder="Username or email" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="password" className="form-control" placeholder="Password" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="agree-label">
											<input type="checkbox" id="chb1" />
											<label htmlFor="chb1">Remember Me</label>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="pasword-remamber text-right">
            <Link className="forget"	to="/resetpassword">Forgot my password?</Link>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="login-button">
											<button type="submit" className="btn btn-theme">Log In Now</button>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="login-desc text-center">
											<p>Not a member?<Link to="/register"> Register</Link>
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
  </>
 )
}

export default LoginForm
