import React from "react";
import "../../Styles/Components/Navbar.css";
import {AnimatePresence, motion} from "framer-motion";
import LinkNav from "./LinkNav";
import {Link} from "react-router-dom";
import Modal from "./Modal";
import Contact from "../Pages/Contact";
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
            className="nav-button nav-link">// Contact;</motion.button>
            <AnimatePresence>
                {/* {contact && <Contact closeFunction={toggleContact} />} */}
                {contact && <Modal onClose={toggleContact} children={<Contact/>} />}
            </AnimatePresence>
        </motion.div>
    );
}

export default Navbar;