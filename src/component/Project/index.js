import React from 'react'
// Import ProjectCard
import ProjectCard from '../Project/ProjectCard'
// Import ProjectData
import {ProjectData} from './ProjectData'

const index=()=> {
 return (
  <>
  {/* Project-Grid Start */}
  <section id="project-grid" className="py100">
		<div className="container">
			<div className="row">
       {ProjectData.map((data, index)=>(<ProjectCard data={data} key={index} />))}
			</div>
		</div>
	</section>
    {/* Project-Grid End */}
  </>
 )
}

export default index
