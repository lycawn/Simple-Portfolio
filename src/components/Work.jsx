import React from "react";
import Header from "./Header";
import Footer from  "./Footer";
import Bounce from 'react-reveal/Bounce';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Work(){

return (<div>
    <Header />

    <div className="containerWork">
    <Bounce>
            <h1>Projects/Work</h1>
        
            <p>I use <span className="languages">HTML</span> , <span className="languages">CSS</span>  , <span className="languages">JavaScript</span> & ofcourse my favourite library <span className="languages">React.js</span></p>
            <p>If i could rate my skills on the languages this would be it :</p>
            <div className="skills">
                <li>CSS 80%</li>
                <li>HTML 90%</li>
                <li>JavaScript 75%</li>
                <li>React.js 70%</li>
                <hr></hr>
                <h3>Previous Works & Early days</h3>
                <p>I worked multiple jobs as a teen & an adult , for the past few years i worked as a technical agent at multiple telecommunication companies. In my earlier days as a teenager i used to make my own private server of one of my favourite <span className="mmo">MMORPG'S</span>. Was mainly build on <span className="languages">Python</span> so every little change i wanted to make i had to program it , my experience to coding back in the day was non existance i was just following tutorials and guide everywhere i could find them just to make a simple change to my lovely game. The hardest part back then  was to make it going on <span className="sql">DynDNS</span>  Server world wide without needing to connect via Hamachi an old "local connection" software were you could join with an IP to the server.
                My Second hardest part was to conenct the website database with the game's Database where i used <span className="languages">Oracle SQL</span> so people could make Online Exchanges .I used to play a lot of video games as a kid first one was age of empires 1  ofcourse , kingdom under fire etc. Later on as an adult  i started photoshop manipulating images and worked as a freelance video editor / designer. </p>
                <h3>A few words about my work</h3>
                <p>I like to design websites of my customers exactly on their needs , listen carefully about their work explore and learn so i can design the perfect <span className="
                languages" >UI/UX</span> for <span className="greece">maximum performance & quality</span>. Using the rigth style on the target audiance is KEY.</p>
            </div>
            <hr></hr>
            </Bounce>
            <Link to="/Preloader4" onClick="audio.play()" href="#"><h2 className="nextPage" >Next Page</h2></Link>
    </div>

    <Footer />

</div>)
    

}
export default Work;