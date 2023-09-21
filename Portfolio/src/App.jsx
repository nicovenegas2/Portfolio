import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {motion, AnimatePresence} from 'framer-motion';
import {Routes, Route, useLocation} from "react-router-dom";
import SocialMedia from './Components/SocialMedia';
import {reactLocalStorage} from 'reactjs-localstorage';

import './Styles/App.css';
import './Components/Skills';
import './Components/Home';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

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
          <Route path='/' element={<Home changebg={changebg}/>} />
          <Route path='/skills' element={<Skills  changebg={changebg}/>} />
          <Route path='/projects' element={<Projects  changebg={changebg}/>} />
        </Routes>
        <div className='socialMedia'>
          <SocialMedia></SocialMedia>
        </div>
      </AnimatePresence>
    </ motion.div>
  )
}

export default App
