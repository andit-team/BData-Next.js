import React from 'react'
import SectionHeading from '../../Home01/SectionHeading/SectionHeading'
import TeamData from '../Team/TeamData'
import TeamCard from '../Team/TeamCard'

const index=()=> {
 const TeamDatas=(val)=>{
  return <TeamCard img={val.img} name={val.name} des={val.destnation} />
 }
 return (
  <>
    <section id="team-area" class="py100">
    <div class="container">
      <SectionHeading title="Our Team" heading="Meet Our Expert Team"/>
      <div class="row">
        {TeamData.map(TeamDatas)}
      </div>
    </div>
  </section>
  </>
 )
}

export default index
