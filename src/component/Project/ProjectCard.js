import React from 'react'
import {Link} from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <>
            {/* Project Area Start */}
            <div className="col-lg-4 col-md-6 col-ms-12 col-12">
                <div className="project-grid-item">
                    <div className="project-grid-img">
                        <img src={props.data.img} alt="img"/>
                    </div>
                    <div className="project-grid-content">
                        <h5><Link to="/projectdetails">{props.data.title}</Link></h5>
                    </div>
                </div>
            </div>
            {/* Project Area End */}
        </>
    )
}

export default ProjectCard
