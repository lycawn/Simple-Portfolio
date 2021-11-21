import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bounce from 'react-reveal/Bounce';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function About(){
  // let audio = new Audio("/sounds/1.wav")

  // const start = () => {
  //   audio.play()
  // }


return(
    <div>
  
        <Header />
       
        <Bounce left>

        <div className="introduction">
       
        <h1>ABOUT ME</h1>
        <img src="/img/profile.png" width="150px" height="150px" />
        <h3>Hello i'm Angelos a <span className="frontend">Front-end Web Developer</span></h3>
        <br></br>
        
      
        <p>Welcome to my <span className="portfolioSpan">Personal Portfolio</span>
      I love being creative around my designs and try new things, i focus on fast , interactive , easy to use design</p>
        <p>I am currently based in <span className="greece">Greece, Athens. </span></p>
        <h3 className="hobbies">Hobbies</h3>
        <p>some of my hobbies are  walking around town , hiking , playing guitar , reading  & enjoying small moments</p>
        
        <h3>Favourite Quotes</h3>
        <p> <span className="Quote">“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”</span>– Buddha</p>
        <p><span className="Quote">“The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.”</span>-Socrates</p>
        <hr></hr>
        <Link to="/Preloader3" onClick="audio.play()" href="#"><h2 className="nextPage" >Next Page</h2></Link>
    
        </div>
        <br></br>
        </Bounce>
        
    
    <Footer />

    </div>
)

}

export default About;