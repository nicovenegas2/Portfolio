import React from "react";
import "../../Styles/Pages/Contact.css";

import { motion } from "framer-motion";

function Contact( {closeFunction}) {
    return(
        <motion.div className="contact-container"
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
        }}
        transition={{ duration: 1,type: "spring", stiffness: 300, damping: 17}}
        >
        <div className="close-outside" onClick={closeFunction}></div>
        <h1>Lets Work together</h1>

        <form className="contact-form">
            <div className="contact-section">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div className="contact-section message" >
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="contact-button">Send</button>
        </form>

        </motion.div>
    )
}

export default Contact;

