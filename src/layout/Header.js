import React from 'react'
import logos from '../assets/img/logo.png'
import { AiOutlineDown } from "react-icons/ai";


const Header=()=> {
 return (
  <>
    <div className="navbar-area">
        <div className="plamb-responsive-nav">
            <div className="container">
                <div className="plamb-responsive-menu">
                    <div className="logo">
                        <a href="index.html">
                            <img src={logos} className="white-logo" alt="logo" />
                            <img src={logos} className="black-logo" alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="plamb-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src={logos} className="white-logo" alt="logo" />
                        <img src={{logos}} className="black-logo" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    Home
                                    <i><AiOutlineDown/></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link active">
                                            Home One
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-2.html" className="nav-link">
                                            Home Two
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-3.html" className="nav-link">
                                            Home Three
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-4.html" className="nav-link">
                                            Home Four
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-5.html" className="nav-link">
                                            Home Five
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    Services
                                    <i><AiOutlineDown/></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="service.html" className="nav-link">
                                            Servive
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="service-details.html" className="nav-link">
                                            Service-Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    Project
                                    <i><AiOutlineDown/></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="project-grid.html" className="nav-link">
                                            Project Grid
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="project-masonary.html" className="nav-link">
                                            Project Masonary
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="project-details.html" className="nav-link">
                                            Project Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    Blog
                                    <i><AiOutlineDown/></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="blog.html" className="nav-link">
                                            Blog Grid
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog-detail.html" className="nav-link">
                                            Blog Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link">
                                    Pages
                                    <i><AiOutlineDown/></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">Shop</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="shop.html" className="nav-link">
                                                    Shop
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="shop-details.html" className="nav-link">
                                                    Single Products
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="cart.html" className="nav-link">
                                                    Cart
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="checkout.html" className="nav-link">
                                                    Checkout
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="login.html" className="nav-link">
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="error.html" className="nav-link">
                                            404 Error
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="faqs.html" className="nav-link">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="other-option">
                            <a className="btn btn-theme" href="contact.html">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  </>
 )
}

export default Header
