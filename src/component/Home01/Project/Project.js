import React from 'react'
import img1 from '../../../assets/img/recent-work/1.png'
import img2 from '../../../assets/img/recent-work/2.png'
import img4 from '../../../assets/img/recent-work/4.png'
import img5 from '../../../assets/img/recent-work/5.png'
import Masonry from 'react-masonry-css'
import { BsArrowRight } from "react-icons/bs";

const Project=(props)=> {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };
 return (
  <>
    <section id="recent-work" className="py100 bg-color">
        <div className=" container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="left-side-title">
                        <h3>Recent Projects</h3>
                        <h2 className="pt10">
                            Check Some of Our Recent Successful Projects
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <Masonry  breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                        
                        <div className="work-item">
                            <img src={img1} alt="img" />
                            <div className="overlay-arae">
                                <a href="project-details.html"> <i><BsArrowRight/></i></a>
                            </div>
                        </div>
                        <div className="work-item">
                            <img src={img2} alt="img" />
                            <div className="overlay-arae">
                                <a href="project-details.html"> <i><BsArrowRight/></i></a>
                            </div>
                        </div>
                        <div className="work-item">
                            <img src={img4} alt="img" />
                            <div className="overlay-arae">
                                <a href="project-details.html"> <i><BsArrowRight/></i></a>
                            </div>
                        </div>
                        <div className="work-item">
                            <img src={img2} alt="img" />
                            <div className="overlay-arae">
                                <a href="project-details.html"> <i><BsArrowRight/></i></a>
                            </div>
                        </div>   
                        <div className="work-item">
                            <img src={img1} alt="img" />
                            <div className="overlay-arae">
                                <a href="project-details.html"> <i><BsArrowRight/></i></a>
                            </div>
                        </div>
                        <div className="work-item">
                            <img src={img5} alt="img" />
                            <div className="overlay-arae">
                                <a href="project-details.html"> <i><BsArrowRight/></i></a>
                            </div>
                        </div>      
                          
                </Masonry>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default Project
