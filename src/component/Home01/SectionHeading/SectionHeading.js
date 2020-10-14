import React from 'react'

const SectionHeading=(props)=> {
 return (
  <>
   <div class="row justify-content-center">
           <div class="col-lg-8">
                    <div class="section-title-center text-center pb30">
                        <h3 class="pb10">{props.title}</h3>
                        <h2>{props.heading}</h2>
                    </div>
                </div>
          </div>
  </>
 )
}

export default SectionHeading
