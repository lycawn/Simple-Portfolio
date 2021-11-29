import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 
'react-router-dom';
function Header(){

  const wrapperRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsVisible(false);
    }
    setIsVisible(true);

  };

    return ( isVisible &&
    

        <div   className="Header">

           <details ref={wrapperRef}>
          
  <summary><img src="/img/santa.png" width="60px" height="40px"/></summary>

  <nav  id="menu" className="menu" >

    <Link to="/" href="#">Home</Link>
    <Link to="/About" href="#">About</Link>
    <Link to="/Work" href="#">Work</Link>
    <Link to="/Contact" href="#">Contact</Link>
    <Link to="/Blog" href="#">Personal Blog</Link>
    <Link to="/Social" href="#">One Page Archive</Link>
    

  </nav>
  
</details>

</div>


    )

}
export default Header;