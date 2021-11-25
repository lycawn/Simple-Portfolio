import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    const [inputText, setInputText] = useState("Contact Me")
    function handleClick(){
        setInputText("Email Sent, Thanks for Contacting me!")
    }

return (<div>
        <Header />
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
            
        <a rel="noreferrer" className="instagram" href="https://www.instagram.com/aggelos.antoniades/" target="_blank"><i className="fab fa-instagram-square"></i>Instagram</a>
        <a rel="noreferrer" className="instagram" href="https://www.linkedin.com/in/angelos-antoniades/" target="_blank"><i className="fab fa-linkedin"></i>LinkedIn</a>
        <a className="github">GitHub</a>
        </div>
        

    
        <Footer />
</div>)

}
export default Contact;