import "../../Styles/Components/ProjectThumb.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ProjectThumb({title, img, listIcons}) {
    return(
        <div className="project-thumb">
            <img src={img} alt=""
            className="project-thumb-img"/>
            <div className="project-thumb-overlay">
                <p className="project-thumb-title">{title}</p>

                <div className="project-thumb-icons">
                    <FontAwesomeIcon icon={['fab', 'github']} className="project-thumb-icon"/>
                    <FontAwesomeIcon icon={['fab', 'react']} className="project-thumb-icon"/>
                    <FontAwesomeIcon icon={['fab', 'node']} className="project-thumb-icon"/>
                    <FontAwesomeIcon icon={['fab', 'js']} className="project-thumb-icon"/>
                    <FontAwesomeIcon icon={['fab', 'css3']} className="project-thumb-icon"/>
                    <FontAwesomeIcon icon={['fab', 'html5']} className="project-thumb-icon"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectThumb;