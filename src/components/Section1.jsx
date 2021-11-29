import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Zoom from "react-reveal/Zoom";
function Section1() {


  return (
    <div>
      <Zoom>
        <div className="container" id="about">
   
          <h1 className="headingtext">
            Angelos <img className="rubik" src="/img/rubik.png" /> Antoniades
          </h1>
          <p className="under">
            Front-end <span className="Quote">Web Developer</span>
          </p>
          <br></br>
       
          <Link to="/Preloader2" onClick="audio.play()" href="#">
            <h2 className="start">START</h2>
          </Link>
          <br></br>
        </div>
        
      </Zoom>
      
    </div>
  );
}
export default Section1;
