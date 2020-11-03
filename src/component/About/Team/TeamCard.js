import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineBehance } from "react-icons/ai";

const TeamCard=(props)=> {
 return (
  <>
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
          <div class="titem text-center responsive-mt-30">
            <div class="team-img">
              <img src={props.img} alt="imf" />
              <div class="social valign">
              <div class="full-width">
                  <a href="#!" class="icon">
                    <i><FaFacebookF/></i>
                  </a>
                  <a href="#!" class="icon">
                    <i><AiOutlineTwitter/></i>
                    </a>
                  <a  href="#!" class="icon">
                    <i><FaPinterestP/></i>
                    </a>
                  <a  href="#!" class="icon">
                    <i><AiOutlineBehance/></i>
                    </a>
                </div>
              </div>
            </div>
            <div class="team-text">
 <h3>{props.name}</h3>
 <p>{props.des}</p>
            </div>
          </div>
        </div>
  </>
 )
}

export default TeamCard
