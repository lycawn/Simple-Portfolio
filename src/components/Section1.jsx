import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from "./Footer";
import Zoom from 'react-reveal/Zoom';
function Section1(){

return (
  <div>
  <Zoom>
    <div className="container" id="about">
  <h1 className="headingtext">Angelos Antoniades</h1>
  <p className="under">The website is currently under-construction</p>
  <br></br>
  <Link to="/Preloader2" href="#"><h2 className="nextPage" >START</h2></Link>
  <br></br>


</div>
</Zoom>
<img className="introimg" src="/img/mountain.png"/>
<Footer />

    </div>
    
)

}
export default Section1;