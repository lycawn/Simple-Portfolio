import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer"
import About from "./About";
import Work from "./Work";
import Contact from "./Contact"
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Social(){
    const [inputText, setInputText] = useState("Contact Me")
    function handleClick(){
        setInputText("Email Sent, Thanks for Contacting me!")
    }

return(
    <div>
    <Header />
    <div className="containerSocial">
    <h1>All in One page Archive</h1>

    <br></br>
    <h1 className="headingtext">Angelos Antoniades</h1>
    <br></br>
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


</div>
<br></br>
</Bounce>


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
            </div>
            <Zoom>
            <p className="quotes"><span className="Quote2">“The unexamined life is not worth living.”</span> — Socrates</p>
        <div className="containerContact">
        <form onSubmit={handleClick} action="https://formsubmit.co/692e9ccd5b408a55b9f54869804800f7" target="_blank" method="POST">
            <h1 className="headingtext">{inputText}</h1>
            <input name="name" type="name" placeholder=" First Name..."/>
            <input name="email" type="Email" placeholder=" Email..."/>
            <textarea name="text" type="text" placeholder="Please type your message."/>
            <button type="submit">Send Mail</button>
            {/* <img className="aboutImg" src="/img/2.png" /> */}
            </form>
            
        </div>
        

        <a className="instagram" href="https://www.instagram.com/aggelos.antoniades/" target="_blank"><i class="fab fa-instagram-square fa-4x"></i></a>
        
        <a className="github"><i class="fab fa-github-square fa-4x"></i></a>
        </Zoom>
    </div>
    <Footer />
    </div>
)

}
export default Social;