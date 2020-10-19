import React from 'react'
import Icon1 from '../../assets/img/service/1.png'
import Icon2 from '../../assets/img/service/2.png'
import Icon3 from '../../assets/img/service/3.png'

const DetailsCard=()=> {
 return (
  <>
  	<section id="service-slider" className="py100 bg-color">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-12 col-12">
					<div className="service-box box-shadow border-radius">
						<div className="service-box-inner text-center">
							<img src={Icon1} alt="img" />
							<h3><a href="service-details.html">Data Science</a></h3>
							<p>Lorem ipsum dolor sit amet, sed nom consectetur adipiscing elit, sed do eiusmod tempor
								incididunt.</p> <a href="service-details.html">Read More ...</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 col-12">
					<div className="service-box box-shadow border-radius">
						<div className="service-box-inner text-center">
							<img src={Icon2} alt="img" />
							<h3><a href="service-details.html">Machine Learning</a></h3>
							<p>Lorem ipsum dolor sit amet, sed nom consectetur adipiscing elit, sed do eiusmod tempor
								incididunt.</p> <a href="service-details.html">Read More ...</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12 col-12">
					<div className="service-box box-shadow border-radius">
						<div className="service-box-inner text-center">
							<img src={Icon3} alt="img" />
							<h3><a href="service-details.html">Artificial Intelligence</a></h3>
							<p>Lorem ipsum dolor sit amet, sed nom consectetur adipiscing elit, sed do eiusmod tempor
								incididunt.</p> <a href="service-details.html">Read More ...</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </>
 )
}

export default DetailsCard
