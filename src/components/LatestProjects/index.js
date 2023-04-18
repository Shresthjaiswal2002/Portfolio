import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import Lottie from 'react-lottie';
import * as animationData from '../../musicplayer.json';
import * as animationDatas from '../../mic.json';
import "./style.css";


const LatestProjects = () => {

  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: animationDatas.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  

  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
      data-aos="zoom-in-up"
    >
      <div>
      <MediumHeading text={"PROJECTS"} style={{marginBottom: '23px',}} />
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <MediumHeading style={{color: '#BB0000'}} text="Online Gallery" />
          <MediumHeading
            style={{ fontSize: '17px',marginLeft: '12px',marginTop: '12px' }}
            text="An online Gallery which presents all the details on hovering the image"
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
          <a className='button' href="https://onlinegallerysj.netlify.app//">Live Link</a>
          </div>
        </div>
        <div className="projectImgContainer">
        <Lottie options={defaultOptions1}
             style={{marginTop: '0.1rem', marginLeft: '5rem'}}
              height={220}
              width={500}
              isStopped={true}
              isPaused={true}/>
        </div>
      </Card>
      </div>
      <div style ={{ marginTop: '12px'}}>
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <MediumHeading style={{color: '#BB0000'}} text="Movie App" />
          <MediumHeading style={{ fontSize: '17px',marginLeft: '12px',marginTop: '12px' }}
            text="Create beautiful UI to play movie stored in the imdb  website using the  API"
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <a className='button' href=" https://imdbmovieappproject.netlify.app/">Live Link</a>
          </div>
        </div>
        <div className="projectImgContainer">
        <Lottie options={defaultOptions}
             style={{marginTop: '0.1rem', marginRight: '0px'}}
              height={250}
              width={400}
              isStopped={true}
              isPaused={true}/>
        </div>
      </Card>
      </div>
    </div>
    
  );
};

export default LatestProjects;