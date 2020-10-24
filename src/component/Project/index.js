import React from 'react'
import ProjectCard from '../Project/ProjectCard'
import ProjectData from '../Project/ProjectData'

const index=()=> {
const PojectDatas=(val)=>{
  return <ProjectCard   img={val.img} title={val.title}/>
  
}
 return (
  <>
  <section id="project-grid" className="py100">
		<div className="container">
			<div className="row">
    {ProjectData.map(PojectDatas)}
			</div>
		</div>
	</section>
  </>
 )
}

export default index
