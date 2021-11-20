import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    const [inputText, setInputText] = useState("Contact Me!")
    function handleClick(){
        setInputText("Email Sent, Thanks for Contacting me!")
    }

return (<div>
        <Header />
        <div className="containerContact">
        <form onSubmit={handleClick} action="https://formsubmit.co/692e9ccd5b408a55b9f54869804800f7" target="_blank" method="POST">
            <h1>{inputText}</h1>
            <input type="name" placeholder=" First Name..."/>
            <input type="Email" placeholder=" Email..."/>
            <textarea type="text" placeholder="Please type your message."/>
            <button type="submit">Send Mail</button>
            </form>
        </div>
        <Footer />
</div>)

}
export default Contact;