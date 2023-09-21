import React, { useEffect } from "react";
import '../Styles/Projects.css'
import SocialMedia from "./SocialMedia";
import { changeColorSocialMedia } from "../Functions/colorChange";
import {motion} from 'framer-motion';

function Projects({changebg}) {

    useEffect(() => {
        changebg("linear-gradient(180deg, var(--color-background) 100%, var(--color-background-secondary) 0%)");
        changeColorSocialMedia("var(--color-text-secondary)");
    }, [])
    
    
    return(
        <motion.div className = "about-div"
        > 
        </motion.div>
    );
}

export default Projects;