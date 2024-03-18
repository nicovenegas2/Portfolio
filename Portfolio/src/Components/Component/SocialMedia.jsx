import React from "react";
import "../../Styles/Components/SocialMedia.css"
import Icon from './Icon'


function SocialMedia() {
    return(
        <div className="social-media-div">
            <Icon icon={"fas fa-file-pdf"} link="src/assets/Resume-Nicolas-Venegas.pdf"></Icon>
            <Icon icon={"fab fa-linkedin"}link="https://www.linkedin.com/in/covedev"></Icon>
            <Icon icon={"fab fa-spotify"}link= "https://github.com/nicovenegas2"></Icon>
            <Icon icon={"fab fa-square-github"}link="https://github.com/nicovenegas2"></Icon>

            {/* <Icon icon={"co_present"} link={null}></Icon>
            <Icon icon={"linkedin"}link={null}></Icon>
            <Icon icon={"alternate_email"}link={null}></Icon>
            <Icon icon={"call"}link={null}></Icon> */}
        </div>
    );
}

export default SocialMedia;