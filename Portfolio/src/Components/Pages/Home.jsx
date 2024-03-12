import React from "react";
import "../../Styles/Pages/Home.css";
import avatar from "../../assets/Avatar.png";
import {motion} from 'framer-motion';
import { useEffect } from "react";
import { changeColorSocialMedia } from "../../Functions/colorChange";
function Home({changebg}) {

    useEffect(() => {
        changebg("linear-gradient(90deg, var(--color-background) 30%, var(--color-background-secondary) 30%)");
        changeColorSocialMedia();
    }, [])

    const transitionTime = 0.5;


    return (
        <motion.div className="home-container"
        key="home-container"
        initial={{
            y: "-100vh",
            opacity: 0,
        }}
        animate={{
            y: 0,
            transition: { duration: transitionTime},
            opacity: 1,
        }}
        exit={{
            opacity: 0,
            transition: { duration: 0.1}
        }}


        // initial={{
        //     opacity: 0,
        // }}
        // animate={{
        //     opacity: 1,
        //     transition: { duration: 0.5}
        // }}
        // exit={{
        //     opacity: 0,
        //     transition: { duration: 0.5}
        // }}
        >
        <div className="home-left">
            <img src={avatar} alt="" className="home-avatar" />
            <h1 className="home-left-intro">Hi, my name is</h1>
            <h1 className="home-left-name">Nicolas</h1>
        </div>
        <div className="home-right">
            <h1 className="home-right-name">Venegas</h1>
            <p className="home-right-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien sapien, finibus eu fermentum quis, tristique ut dui. Phasellus tempus tincidunt nibh, vitae blandit augue bibendum eget. Donec a pharetra mi. Phasellus porta consequat nibh, non pellentesque nisl tristique eget. Donec 
            </p>
        </div>

        </ motion.div>
    );
}

export default Home;