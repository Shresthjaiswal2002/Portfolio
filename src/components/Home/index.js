import React from "react";
import Lottie from 'react-lottie';
import * as animationData from '../../working.json'
import "./style.css";
import pdf from '../pdf/Shresth Jaiswal Resume.pdf';


const Home = () => {
   
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="container" style={{ marginTop: "70px" , zIndex : 2}}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Shresth Jaiswal
          </p>
          <h1 className="textColor ls-1 mtb-10"> Self-learner and a creative Person</h1>
          <p className="font-12 grey mtb-10">Frontend Developer using React.</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <a className='button' href={pdf}>Download CV</a>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
          <Lottie options={defaultOptions}
             style={{marginTop: '3rem', marginLeft: '2.5rem'}}
              height={300}
              width={500}
              isStopped={true}
              isPaused={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;