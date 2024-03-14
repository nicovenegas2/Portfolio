import React from "react";
import "../../Styles/Components/ProjectThumb.css";
import { getImage } from "../../Functions/util-images";
import { AnimatePresence, motion } from "framer-motion";
import Projectinfo from "./Projectinfo";
import Modal from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectThumb({project: {title,stack,description,imgs,github,link}}) {

  const [info, setInfo] = React.useState(false);
  function toggleInfo(){
      setInfo(!info);
  }

    return(
      <>
        <div className="project-thumb">
            <img src={getImage(imgs[0])} alt=""
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
        </div>
            <AnimatePresence>
                {info && <Modal onClose={toggleInfo} children={<Projectinfo project={{title, description, stack, image: imgs, github, link}}/>} />}

            </AnimatePresence>
      </>
    );
}

export default ProjectThumb;