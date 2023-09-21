import React, { useEffect } from "react";
import '../Styles/Skills.css'
import SocialMedia from "./SocialMedia";
import { changeColorSocialMedia } from "../Functions/colorChange";
import SkillCircle from "./SkillCircle";
import {motion} from 'framer-motion';

function Skills({changebg}) {


    useEffect(() => {
        changebg("linear-gradient(0deg, var(--color-background) 0%, var(--color-background-secondary) 0%)");
        changeColorSocialMedia();

    }, [])
    return(
        <motion.div className = "about-div"
        > 
            <SkillCircle title="Front-end" />
        </motion.div>
    );
}

export default Skills;