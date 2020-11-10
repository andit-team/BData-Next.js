import React from 'react'
// Import Section Heading
import SectionHeading from '../../Home01/SectionHeading/SectionHeading'

// Import TeamData
import TeamData from '../Team/TeamData'

// Import TeamCard
import TeamCard from '../Team/TeamCard'

const index=()=> {
  //  Team Data Map
 const TeamDatas=(val, index)=>{
  return <TeamCard img={val.img} name={val.name} des={val.destnation} key={index} />
 }
 return (
  <>
  {/* Team Area Start */}
    <section id="team-area" className="py100">
    <div className="container">
      <SectionHeading title="Our Team" heading="Meet Our Expert Team"/>
      <div className="row">
        {TeamData.map(TeamDatas)}
      </div>
    </div>
  </section>
    {/* Team Area End */}
  </>
 )
}

export default index
