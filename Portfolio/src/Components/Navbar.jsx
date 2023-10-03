import React from "react";
import "../Styles/Navbar.css";
import {motion} from "framer-motion";
import Contact from "./Contact";
import LinkNav from "./LinkNav";

function Navbar() {

    const [contact, setContact] = React.useState(false);

    function toggleContact(){
        setContact(!contact);
    }

    return(
        <motion.div className="nav-container"
        initial = {{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.4}}
        > 
            <LinkNav link="/" text="About Me"></LinkNav>
            <LinkNav link="/projects" text="Projects"></LinkNav>
            <LinkNav link="/skills" text="Skills"></LinkNav>
            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{duration: 0.2}}
            onClick={toggleContact}
            className="nav-button">// Contact;</motion.button>
            {contact && <Contact />}
        </motion.div>
    );
}

export default Navbar;