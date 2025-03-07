// import{BrowserRouer as Router, Route , Routes} from 'react-router-dom';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Home from"./componet/Home"
import Navbar from "./componet/Navbar"
import  {Countries}  from './componet/Countries';
import About from './componet/About';

import './App.css'


export function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Countries" element={<Countries />} />
      <Route path="/About" element={<About />} />
    </Routes>
   </Router>
  )
}

export default App
