import React from "react";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";
const Footer = () => {
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Portfolios</a>
            <a href="">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;