import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ReactPlayer from 'react-player/lazy'
import Zoom from "react-reveal/Zoom";


function Blog(){


return (

    <div className="containerBlog">
    <Header  />
    <Zoom>
    <div className="articles">
    <h1>ARTICLES</h1>
    {/* <div className="article2">
        <h1 className="articleHeader2"></h1>
        <p></p>
    </div> */}

    <div className="article1">
        <h1 className="articleHeader">My Introduction to Programming</h1>
        <p className="languages">11/29/2021 6:30PM</p>

        <p>My first experience with programming was around the year of 2009/2010 i was self taught looking at tutorials but nothing memorized since then. Later on at summer of 2021 i decided i wanted to get into web development.  Picked up a few courses during that i went straight into making my own projects and apps to test my knowledge!
        Thanks to my early experience with programming i developed a problem solving mindset which helped me through out the development course</p> <ul>
            <h2>Languages developed</h2>
            <li>JavaScript</li>
            <p>again and again my all time favourite programming language, including libraries like React </p>
            <li>HTML/CSS</li>
            <p>Ofcourse something every one has to pick up</p>
        </ul>
     
       <p>In the end it all comes down on how much you willing to learn and do the hard work. I had Minimum to Zero experience in programming but to be honest with one's self learning has no end.</p>
    </div>



    </div>
    <div className="youtube">
    <h3><span className="languages">Ye boi.</span></h3>
    <p>This remix and the little fellow attitude is just amazing</p>
    <div className="player-wrapper">

     <ReactPlayer className="react-player"
      width="80%"
      height="80%"
        url="https://www.youtube.com/watch?v=T0P6MC8Ris8&ab_channel=TheKiffness"
      />
        </div>
  
  </div>
    <Footer /></Zoom></div>
)


}
export default Blog;