import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/Preloader';
import About from "./components/About";
import Preloader2 from "./components/Preloader2";
import Preloader3 from "./components/Preloader3";
import Preloader4 from "./components/Preloader4";
import Work from "./components/Work";
import Darkmode from 'darkmode-js';
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.render(
<div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="Preloader2/*" element={<Preloader2 />} />
        <Route path="Preloader3/*" element={<Preloader3 />} />
        <Route path="Preloader4/*" element={<Preloader4 />} />
        <Route path="About/*" element={<About />} />
        <Route path="Work/*" element={<Work />} />
        <Route path="Contact/*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
    </div>,
  document.getElementById('root')
);

