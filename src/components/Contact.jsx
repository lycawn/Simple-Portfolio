import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
            <h1>{inputText}</h1>
            <input name="name" type="name" placeholder=" First Name..."/>
            <input name="email" type="Email" placeholder=" Email..."/>
            <textarea name="text" type="text" placeholder="Please type your message."/>
            <button type="submit">Send Mail</button>
            </form>
        </div>
        

        <a className="instagram" href="www.instagram.com/aggelos.antoniades"><i class="fab fa-instagram-square fa-4x"></i></a>
        
        <a className="github"><i class="fab fa-github-square fa-4x"></i></a>
    
        <Footer />
</div>)

}
export default Contact;