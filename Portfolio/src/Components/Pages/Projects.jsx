import React, { useEffect } from "react";
import '../../Styles/Pages/Projects.css'
import { changeColorSocialMedia } from "../../Functions/colorChange";
import {motion} from 'framer-motion';
import ProjectThumb from "../Component/ProjectThumb.jsx";
import projects from "../../assets/Projects.json";

function Projects({changebg}) {

    useEffect(() => {
        changebg("linear-gradient(180deg, var(--color-background) 100%, var(--color-background-secondary) 0%)");
        changeColorSocialMedia("var(--color-text-secondary)");
    }, [])
    
    const transitionTime = 0.5;
    
    return(
        <motion.div className = "projects-div"
        key="projects-div"
        initial={{
            y: "100vh",
            opacity: 0,
        }}
        animate={{
            y: 0,
            transition: { duration: transitionTime},
            opacity: 1,
        }}
        > 
            <div className="projects-grid">
                {projects.map((project, index) => {
                    return <ProjectThumb key={index} project={project} />
                })}
            </div>
        </motion.div>
    );
}

export default Projects;