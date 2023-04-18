import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import testimonialsLeft from "../../assests/images/testimonials-01.jpg";
import testimonialsRight from "../../assests/images/testimonials-02.jpg";
import profilePicture from "../../assests/images/pp.png";
import "./style.css";

const Testimonials = () => {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What people say" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
 
        <div style={{borderRadius: '5px'}} data-aos="fade-left" className="testimonialImgContainer">
          <img src={testimonialsLeft} alt="" />
        </div>
        <Card data-aos="zoom-in" className="myCard">
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={profilePicture} alt="" />
            </div>
            <div className="mlr-10">
              <p  style={{color: '#BB0000'}} className="primaryColor font-16">Asif Akhtar</p>
              <p className="textColor font-14 bold-600">Front-End Developer</p>
            </div>
          </div>
          <p style={{color : '#100c08'}} className="mtb-10 grey">
          Having Shresth as a friend is an excellent example of friendship in itself.  Open-
          minded, genuine, compassionate, and level-headed, she can always be counted on
          to listen and provide support when needed.  Her wonderful sense of humor,
          adventure, and life experiences have given her the ability to see any situation in a
          positive sense.  Personally believing that ‘people come into our lives for a reason, a
          season, or a lifetime’, I’ve known for a long time that Shresth is a lifetime friend.
        </p>
        </Card>
        <div style={{borderRadius: '5px'}} data-aos="fade-right" className="testimonialImgContainer">
          <img src={testimonialsRight} alt="" />
        </div>
      </div>

      <Card style={{marginTop: '6rem', marginBottom: '12px'}} className="m-auto contactCard">
        <p style= {{fontSize: '16px'}} className="text-center font-12 mtb-10">
          Have any project in mind?{" "}
          <span style={{color: '#BB0000'}} className="primaryColor">Say Hello At :)</span>
        </p>
        <a style={{marginLeft: '4.5rem',cursor: 'pointer'}} href='https://shresthjaiswal2002@gmail.com' className="text-center font-25">shresthjaiswal2002@gmail.com</a>
      </Card>
    </div>
  );
};

export default Testimonials;