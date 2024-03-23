import React from "react";
import "../../Styles/Pages/Home.css";
import avatar from "../../assets/Avatar.png";
import {motion} from 'framer-motion';
import { useEffect } from "react";
import { changeColorSocialMedia } from "../../Functions/colorChange";
function Home({changebg}) {

    useEffect(() => {
        changebg("linear-gradient(90deg, var(--color-background) 30%, var(--color-background-secondary) 30%)");
        changeColorSocialMedia("var(--color-text)");
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
        >
        <div className="home-left">
            <img src={avatar} alt="" className="home-avatar" />
            <h1 className="home-left-intro">Hi, my name is</h1>
            <h1 className="home-left-name">Nicolas</h1>
        </div>
        <div className="home-right">
            <h1 className="home-right-name">Venegas</h1>
            <p className="home-right-intro">
            Hey! I'm a Fullstack developer, adept in both backend and frontend web development. With a passion for data analytics, I excel in cloud computing and containerization. Let's innovate together for today's tech challenges!
            </p>
        </div>

        </ motion.div>
    );
}

export default Home;