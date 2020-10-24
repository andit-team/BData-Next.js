import React from 'react'

const index=(props)=> {
 return (
  <>
    <section id="banner-inner-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="banner-details text-center">
                        <h2>{props.heading}</h2>
                        <ul>
                        <li><a href="#!">{props.menu1}</a></li>
                        <li><span>/</span>{props.menu2}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default index
