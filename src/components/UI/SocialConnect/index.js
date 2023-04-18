import React from "react";
import "./style.css";
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';




const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span style={{color: '#100c08',fontSize: '16px'}}  className="textColor font-12">Follow me on: </span>
      <a className="socialLink" href="https://www.facebook.com/profile.php?id=100008309044394">
      <FaFacebook  style={{color:"blue",fontSize:"25px"}}/>
      </a>
      <a className="socialLink" href="https://github.com/Shresthjaiswal2002/">
      <FaGithub style={{color:"black",fontSize:"25px"}}/>
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/shresth-jaiswal-8bab7a246/">
      <FaLinkedin style={{color:"#0072b1",fontSize:"25px"}} />
      </a>
    </div>
  );
};

export default SocialConnect;