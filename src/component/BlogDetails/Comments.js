import React from 'react'
import { Link } from 'react-router-dom';


const Comments = (props) => {
 return (
  <>
         <li className="media">
         <div className="media-img">
         <img src={props.img} alt="img" />
         </div>
         <div className="media-body">
         <div className="media-header">
         <div className="media-name">
         <h4>{props.name}</h4>
          <p>{props.time}</p>
         </div>
         <div className="post-share"> <Link to="/#" className="replay">{props.replay}</Link>
         <Link to="/#" className="">{props.report}</Link>
         </div>
         </div>
         <div className="media-pragraph">
         <p>{props.para}</p>
         </div>
         </div>
         </li>
  </>
 )
}

export default Comments
