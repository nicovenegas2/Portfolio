import React from "react";
import {motion} from 'framer-motion';
import "../../Styles/Components/Icon.css"

function Icon({icon, link}){
    const timeTransitions = 0.2 ;
    function openLink(){
      window.open(link, "_blank");
    }

    return(
        <motion.div className="icon-div"
        whileTap={{scale:0.8}}
        whileHover={
            {
            scale:[null,1.4,1.3],
            // rotate:[null,360],
            // scale:[null,1.4],
        }}
        initial={{
            opacity:0,
        }}
        animate={{
            opacity:1,
        
        }}
        
        transition={{duration:timeTransitions}}
        >
            <motion.button className="icon-button"
            // whileHover={{color:"var(--color-main)"}}
            transition={{duration:timeTransitions}}
            onClick={() => openLink(link)}
            
            >
                <i className={`${icon}`}></i>
            </motion.button>
        </motion.div>
    );
}

export default Icon