import React, { useEffect } from "react";
import '../../Styles/Pages/Projects.css'
import { changeColorSocialMedia } from "../../Functions/colorChange";
import {motion} from 'framer-motion';
import ProjectThumb from "../Component/ProjectThumb.jsx";
import { projects } from "../../assets/Projects.Json";

function Projects({changebg}) {

    useEffect(() => {
        changebg("linear-gradient(180deg, var(--color-background) 100%, var(--color-background-secondary) 0%)");
        changeColorSocialMedia("var(--color-text-secondary)");
    }, [])
    
    
    return(
        <motion.div className = "about-div"
        > 
            <h1 className="about-title"></h1>
            <div className="projects">
                {projects.map((project, index) => {
                    return <ProjectThumb key={index} project={project} />
                })}
            </div>
        </motion.div>
    );
}

export default Projects;