import React from 'react'
// Import ProjectCard
import ProjectCard from '../Project/ProjectCard'
// Import ProjectData
import ProjectData from '../Project/ProjectData'

const index=()=> {
const PojectDatas=(val, index)=>{
  return <ProjectCard key={index}  img={val.img} title={val.title}/>

}
 return (
  <>
  {/* Project-Grid Start */}
  <section id="project-grid" className="py100">
		<div className="container">
			<div className="row">
    {ProjectData.map(PojectDatas)}
			</div>
		</div>
	</section>
    {/* Project-Grid End */}
  </>
 )
}

export default index
