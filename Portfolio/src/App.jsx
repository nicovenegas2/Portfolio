import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {motion, AnimatePresence} from 'framer-motion';
import {Routes, Route, useLocation} from "react-router-dom";
import SocialMedia from './Components/Component/SocialMedia';
import {reactLocalStorage} from 'reactjs-localstorage';
// import all fa brands
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Agrega todas las marcas al library
library.add(fab);



import './Styles/App.css';

// import Navbar from './Components/Component/Navbar';
// import Home from './Components/Home';
// import Skills from './Components/Skills';
// import Projects from './Components/Projects';

import Navbar from './Components/Component/Navbar';
import Home from './Components/Pages/Home';
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';

function App() {

  const location = useLocation();

  const initialString = "linear-gradient(90deg, var(--color-background) 30%, var(--color-background-secondary) 30%)";
  const [bg, setBg] = useState(["",initialString]);

  function changebg(color){
    let newBg = [bg[1], color];
    setBg(newBg);
  }



  return (
    <motion.div className='container-app'
    initial={{background: bg[0]}}
    animate={{background: [null, bg[1]]}}
    transition={{duration: 0.5}}

    >
      <AnimatePresence>
        <Navbar></Navbar>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home changebg={changebg}/>} key='home'/>
          <Route path='/skills' element={<Skills  changebg={changebg}/>} key='skills'/>
          <Route path='/projects' element={<Projects  changebg={changebg}/> } key='projects'/>
        </Routes>
        <div className='socialMedia'>
          <SocialMedia></SocialMedia>
        </div>
      </AnimatePresence>
    </ motion.div>
  )
}

export default App
