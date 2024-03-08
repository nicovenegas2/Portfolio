import React from "react";
import "../../Styles/Components/SkillCircle.css";


function SkillCircle({title}){

    return(
        <div className="skill-circle">
            <div className="skill-circle-title">
                <span>{title}</span>
            </div>

            <div className="skill-circle-thumb">
            
            </div>
        </div>
    );
}

export default SkillCircle;