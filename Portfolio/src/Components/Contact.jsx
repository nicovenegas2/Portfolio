import React from "react";
import "../Styles/Contact.css";

import { motion } from "framer-motion";

function Contact() {
    return(
        <motion.div className="contact-container"
        initial={{
            opacity: 0,
            y: 100,
        }}
        animate={{
            opacity: 1,
            y: 0,
        }}
        
        >


        </motion.div>
    )
}

export default Contact;

