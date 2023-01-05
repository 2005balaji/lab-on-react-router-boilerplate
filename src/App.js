import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter as Balaji, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";

function App() {
  return (  
    <Balaji>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Balaji>
  );
}

export default App;
