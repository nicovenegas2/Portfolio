import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SocialMedia from './Components/Component/SocialMedia';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    <div className='socialMedia'>
      <SocialMedia></SocialMedia>
    </div>
  </React.StrictMode>,
)
