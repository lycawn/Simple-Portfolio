import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Header(){

    return (

        <div className="Header">
    
           <details>
           
  <summary></summary>

  <nav class="menu">
    <Link to="/" href="#">Home</Link>
    <Link to="/About" href="#">About</Link>
    <Link to="/Work" href="#">Work</Link>
    <Link to="/Contact" href="#">Contact</Link>
    <a href="#link">Social</a>
  </nav>
</details>
</div>


    )

}
export default Header;