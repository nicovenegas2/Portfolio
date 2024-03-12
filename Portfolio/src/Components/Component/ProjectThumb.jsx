import React from "react";
import "../../Styles/Components/ProjectThumb.css";
import { getImage } from "../../Functions/util-images";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectThumb({project: {title,stack,description,imgs,github,link}}) {
    return(
        <div className="project-thumb">
            <img src={getImage(imgs[0])} alt=""
            className="project-thumb-img"/>
            <div className="project-thumb-overlay">
                <motion.button 
                className="project-thumb-title"
                onClick={() => window.open(link, "_blank")}
                >{title}</motion.button>
                <div className="project-thumb-icons">
                    {stack.map((icon, index) => {
                        return <FontAwesomeIcon icon={["fab", icon]} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectThumb;