import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logos from '../assets/img/logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {MenuData} from './MenuData'
import NavItem from './NavItems'



const Header=()=> {
    const [click, setClick] = useState(false);

    const handleClose = () => document.querySelector("#navbarSupportedContent").classList.remove("d-block")

    const handleClick = () => {
        if(click) {
            document.querySelector("#navbarSupportedContent").classList.remove("d-block")
        } else {
            document.querySelector("#navbarSupportedContent").classList.add("d-block")
        }
        setClick(!click);        
    } 
    
 return (
  <>
    <div className="navbar-area">
        <div className="plamb-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logos} className="white-logo" alt="logo" />
                        <img src={logos} className="black-logo" alt="logo" />
                    </Link>
                    <div className=" mean-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {
                            MenuData.map((item, index)=>(
                                <NavItem item={item} key={index}/>
                            ))
                        }
                        </ul>

                        <div className="other-option">
                            <Link className="btn btn-theme" to="/contact">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="plamb-responsive-nav">
            <div className="container"> 
                <div className="responsive-button"  onClick={handleClick}>
                       {click ? <AiOutlineClose/> : <HiMenuAlt3/>}
                </div>
            </div>
        </div>
    </div>
  </>
 )
}

export default Header
