import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";


const Skill = (props) => {
  return (
    <div className="flexRow align-center mtb-10">
      <div className="skillContainer">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>

      <div className="mlr-10">
        <p style={{color: '#BB0000'}}className="font-16 bold-500 textColor mtb-10">{props.skillName}</p>
        <p  style={{color: '#100c08'}} className="font-14 bold-500 grey mtb-10">{props.desc}</p>
      </div>
    </div>
  );
};

export default Skill;