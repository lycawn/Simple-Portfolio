import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/Preloader';
import About from "./components/About";
import Preloader2 from "./components/Preloader2";
import Preloader3 from "./components/Preloader3";
import Preloader4 from "./components/Preloader4";
import Preloader5 from "./components/Preloader5";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Social from "./components/Social";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
console.log("Fn")
ReactDOM.render(
<div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="Preloader2/*" element={<Preloader2 />} />
        <Route path="Preloader3/*" element={<Preloader3 />} />
        <Route path="Preloader4/*" element={<Preloader4 />} />
        <Route path="Preloader5/*" element={<Preloader5 />} />
        <Route path="About/*" element={<About />} />
        <Route path="Work/*" element={<Work />} />
        <Route path="Contact/*" element={<Contact />} />
        <Route path="Social/*" element={<Social />} />
      </Routes>
    </BrowserRouter>
    
    </div>,
  document.getElementById('root')
);

