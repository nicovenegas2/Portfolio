import Reactfrom from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";


function LinkNav({link, text}) {
    return(
        <motion.div className="nav-div"
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9}}
            transition={{ duration: 0.4 }}
            >
                <Link to={link} className="nav-link">// {text};</Link>
            </motion.div>
    );
}

export default LinkNav;