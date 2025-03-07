import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './componet/Home.jsx'
import About from './componet/About.jsx'
import {Countries} from './componet/Countries.jsx'
import Navbar from './componet/Navbar.jsx'




ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

    <Route path="/About" element={<About />} />
    <Route path='/' element={< Home />}/>
    <Route path="/Countries" element={< Countries />} />
    
  </Routes>
  </BrowserRouter>
);
