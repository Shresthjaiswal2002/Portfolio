import React from "react";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import SocialConnect from "../UI/SocialConnect";
import Lottie from 'react-lottie';
import * as animationData from '../../follow.json'
import "./style.css";


const percentage = 70;

const About = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  
  return (
    <div className="container" style={{ marginTop: "50px", padding: "50px 0" }}>
      <div data-aos="fade-right" className="rightImgMeContainer">
      <Lottie options={defaultOptions}
             style={{marginTop: '9rem'}}
              height={300}
              width={300}
              isStopped={true}
              isPaused={true}/>
        <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
      </div>
      <div>
        <MediumHeading style={{color: 'red'}} text="About" />
        <MediumHeading text="Hello Everyone, Myself Shresth Jaiswal.  I'm a hardworking student and I love to learn new things." />
      </div>
      <Card
        style={{
          padding: "30px",
          width: "500px",
          height: "300px",
          margin: "100px auto",
          position: "relative",
          marginLeft : '23rem',
          zIndex: 1,
        }}
        data-aos="flip-up"
      >
        <div className="flexRow align-center">
          <div style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: 'black',
                pathColor: "#ff726f",
              })}
            />
          </div>
          <h2  style={{color: '#100c08'}} className="textColor mlr-10">Front-End Developer</h2>
        </div>
        <p  style={{color: '#100c08', fontSize: '15px'}} className="grey mtb-10 font-12">
        I stumbled upon the domain of software development and designing, and I found myself wanting to learn more about it. I thus decided to pick up ReactJS and learn its basics and the core concepts through the resources available online. Not only am I into academics, but I also enjoy participating in cultural, technical, and sports events. I love dancing, singing, and playing several sports like KHO-KHO, Volleyball, and Table Tennis. I thus believe that I am a good blend of academic and extra-curricular excellence.
        </p>
      </Card>
    </div>
  );
};

export default About;