import React from "react";
import "../../Styles/Components/ProjectThumb.css";
import { getImage } from "../../Functions/util-images";
import { AnimatePresence, motion } from "framer-motion";
import Projectinfo from "./Projectinfo";
import Modal from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectThumb({project: {title,stack,description,folder,imgs,github,link}}) {

  const [info, setInfo] = React.useState(false);
  function toggleInfo(){
      setInfo(!info);
  }

    return(
      <>
        <motion.div className="project-thumb"
        initial={{
            opacity:0,
            scale:0.5,
        }}
        animate={{
            opacity:1,
            scale:1,
        }}
        transition={{duration:0.3}}
        >
            <img src={getImage(folder,imgs[0])} alt=""
            className="project-thumb-img"/>
            <div className="project-thumb-overlay">
                <motion.button  
                className="project-thumb-title"
                onClick={() => toggleInfo()}
                >{title}</motion.button>
                <div className="project-thumb-icons">
                    {stack.map((icon, index) => {
                      return <FontAwesomeIcon icon={["fab", icon]} key={index} />
                    })}
                </div>
            </div>
        </motion.div>
            <AnimatePresence>
                {info && <Modal onClose={toggleInfo} children={<Projectinfo project={{title, description, stack, folder, image: imgs, github, link}}/>} />}

            </AnimatePresence>
      </>
    );
}

export default ProjectThumb;