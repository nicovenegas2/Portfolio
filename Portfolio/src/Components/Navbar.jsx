import React from "react";
import "../Styles/Navbar.css";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import LinkNav from "./LinkNav";

function Navbar() {
    return(
        <motion.div className="nav-container"
        initial = {{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.4}}
        > 
            <LinkNav link="/" text="About Me"></LinkNav>
            <LinkNav link="/projects" text="Projects"></LinkNav>
            <LinkNav link="/skills" text="Skills"></LinkNav>
            <LinkNav link="#" text="Contact"></LinkNav>
        </motion.div>
    );
}

export default Navbar;