import React from "react";
import "../../Styles/Components/SocialMedia.css"
import Icon from './Icon'

function SocialMedia() {
    return(
        <div className="social-media-div">
            <Icon icon={"co_present"} func={null}></Icon>
            <Icon icon={"forward_to_inbox"}func={null}></Icon>
            <Icon icon={"alternate_email"}func={null}></Icon>
            <Icon icon={"call"}func={null}></Icon>
        </div>
    );
}

export default SocialMedia;