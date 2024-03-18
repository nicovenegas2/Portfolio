import React from "react";
import "../../Styles/Components/ProjectInfo.css";
import { motion } from "framer-motion";
import { getImages } from "../../Functions/util-images";
import SimpleImageSlider from "react-simple-image-slider";
function Projectinfo({ project: { title, description, stack, image, github, link } }) {

  // get images from imgs except the first one
  // cut the first image
  const images = getImages(image);
  console.log(images);

  return (
    <motion.div className="projectinfo-container"
      initial={{
        scale: 0.5,
        opacity: 0,
        y: 200,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.15 }
      }}
      transition={{ type: "spring", stiffness: 440, damping: 22 }}
    >

      <div className="projectinfo-title">
        <h1>{title}</h1>
      </div>
      <div className="projectinfo-data">
        <div className="projectinfo-desc">
          <p>{description}</p>
        </div>
        <div className="projectinfo-stack">
          {/* <p>Stack: </p> */}
          <div className="projectinfo-stack-icons">
            {stack.map((icon, index) => {
              return <i className={`fab fa-${icon}`} key={index}></i>})}
          </div>
        </div>
      </div>
      <div className="projectinfo-test">
        <SimpleImageSlider className="projectinfo-imgs"
          width={650}
          height={380}
          showBullets={true}
          showNavs={true}
          navStyle={2}
          navSize={40}
          navMargin={10}
          autoPlay={true}
          autoPlayDelay={5}
          loop={true}
          images={images}
        />
        <div className="projectinfo-buttons">
          <button className="projectinfo-button">Demo</button>
          <a href={github} target="_blank" className="projectinfo-button">Github</a>
        </div>
      </div>

    </motion.div>
  )
}

export default Projectinfo;
