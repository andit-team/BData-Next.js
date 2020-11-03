import React from 'react'
import { Link } from 'react-router-dom';
// Import Sidebar Img
import side1 from '../../assets/img/blog/recent-post/1.png'
import side2 from '../../assets/img/blog/recent-post/2.png'
import side3 from '../../assets/img/blog/recent-post/3.png'

const Sidebar = () => {
 return (
        <>
        {/* Sidebar Area Start */}
        <div className="left-head-blog right-side">
        <div className="left-blog-page box-shadow">
        <form action="#">
        <div className="blog-search-option">
        <input type="text" placeholder="Search..." />
        <button className="button" type="submit"> <i className="fa fa-search"></i>
        </button>
        </div>
        </form>
        </div>
        <div className="left-blog-page box-shadow">
        <div className="left-blog">
        <h4>categories</h4>
        <ul>
        <li><Link to="/#">Business</Link><span>12</span>
        </li>
        <li><Link to="/#">Agency </Link><span>17</span>
        </li>
        <li><Link to="/#">Media</Link><span>07</span>
        </li>
        <li><Link to="/#">Social</Link><span>21</span>
        </li>
        <li><Link to="/#">Photoshop</Link><span>14</span>
        </li>
        <li><Link to="/#">development</Link><span>10</span>
        </li>
        <li><Link to="/#">Design</Link><span>15</span>
        </li>
        </ul>
        </div>
        </div>
        <div className="left-blog-page box-shadow">
        <div className="left-blog">
        <h4>recent post</h4>
        <div className="recent-post">
        <div className="recent-single-post">
        <div className="post-img">
        <Link to="/#">
        <img src={side1} alt="img" />
        </Link>
        </div>
        <div className="pst-content">
        <p><Link to="/#">We offer professional Consultant services.</Link>
        </p> <span className="date-type">
        26 Jan / 2018
        </span>
        </div>
        </div>
        <div className="recent-single-post">
        <div className="post-img">
        <Link to="/#">
        <img src={side2} alt="img" />
        </Link>
        </div>
        <div className="pst-content">
        <p><Link to="/#">Montril is an firm and general group.</Link>
        </p> <span className="date-type">
        20 June / 2018
        </span>
        </div>
        </div>
        <div className="recent-single-post">
        <div className="post-img">
        <Link to="/#">
        <img src={side3} alt="img" />
        </Link>
        </div>
        <div className="pst-content">
        <p><Link to="/#">Business man always think positive.</Link>
        </p> <span className="date-type">
        26 Feb / 2018
        </span>
        </div>
        </div>

        <div className="recent-single-post">
        <div className="post-img">
        <Link to="/#">
        <img src={side1} alt="img" />
        </Link>
        </div>
        <div className="pst-content">
        <p>
        <Link to="/#">Man can change business policy all time.</Link>
        </p> <span className="date-type">
        13 Nov / 2018
        </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="left-blog-page box-shadow">
        <div className="left-tags blog-tags">
        <div className="popular-tag left-side-tags left-blog">
        <h4>popular tags</h4>
        <ul>
        <li> <Link to="/#"> Business </Link>
        </li>
        <li><Link to="/#">Agency </Link>
        </li>
        <li><Link to="/#">Media</Link>
        </li>
        <li><Link to="/#">Social</Link>
        </li>
        <li><Link to="/#">Photoshop</Link>
        </li>
        <li><Link to="/#">Seo</Link>
        </li>
        <li><Link to="/#">development</Link>
        </li>
        <li><Link to="/#">Search</Link>
        </li>
        <li><Link to="/#">Design</Link>
        </li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        {/* Sidebar Area Start */}
  </>
 )
}

export default Sidebar
