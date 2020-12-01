import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-router-dom';

const NavItem = props => {
 return (
  <>
       <li className="nav-item">
       <Link to={props.item.href} className="nav-link">
       {props.item.name}
       {props.item.has_children && (
       <i><AiOutlineDown/></i>
       )}
       </Link>
       {props.item.has_children && (

       <ul className="dropdown-menu">
       { props.item.children.map((item, index)=>(
       <NavItem item={item} key={index}/>
       ))}
       </ul>

       )}



       </li>
       </>
       )
}

export default NavItem