import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar.jsx'

import Home from './Pages/Home.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'

import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}