import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logos from '../assets/img/logo.png'
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";



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
                        <img src={{logos}} className="black-logo" alt="logo" />
                    </Link>
                    <div className=" mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                    <i><AiOutlineDown/></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" onClick={handleClose}>
                                            Home One
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" onClick={handleClose}>
                                            Home Two
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" onClick={handleClose}>
                                            Home Three
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" onClick={handleClose}>
                                            Home Four
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" onClick={handleClose}>
                                            Home Five
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#!" className="nav-link">
                                    Services
                                    <i><AiOutlineDown/></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="/service" className="nav-link">
                                            Servive
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/servicedetails" className="nav-link">
                                            Service-Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#!" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#!" className="nav-link">
                                    Project
                                    <i><AiOutlineDown/></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Project Grid
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Project Masonary
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Project Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#!" className="nav-link">
                                    Blog
                                    <i><AiOutlineDown/></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Blog Grid
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#!" className="nav-link">
                                    Pages
                                    <i><AiOutlineDown/></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">Shop</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="#!" className="nav-link">
                                                    Shop
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#!" className="nav-link">
                                                    Single Products
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#!" className="nav-link">
                                                    Cart
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#!" className="nav-link">
                                                    Checkout
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            404 Error
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#!" className="nav-link">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="other-option">
                            <Link className="btn btn-theme" to="#!">
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
                       {click ? <AiOutlineClose/>: <HiMenuAlt3/>}
                </div>
            </div>
        </div>
    </div>
  </>
 )
}

export default Header
