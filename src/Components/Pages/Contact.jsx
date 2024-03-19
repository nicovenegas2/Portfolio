import React,{useRef} from "react";
import "../../Styles/Pages/Contact.css";
import emailjs from '@emailjs/browser';

import { motion } from "framer-motion"


function Contact( {closeFunction}) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_PUBLIC_KEY_JS)
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID_JS, import.meta.env.VITE_TEMPLATE_ID_JS, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY_JS,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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
            transition: { duration: 0.15 }
      }}
        transition={{ duration: 1,type: "spring", stiffness: 300, damping: 17}}
        >
        <h1>Lets Work together</h1>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-section">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="from_email" required></input>
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

