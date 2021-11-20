import React, { useEffect, useState } from "react";
import "./Preloader.css";
import Contact from "./Contact";
function Preloader() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 500);
        });
    }, 700);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Contact Page</span>
            </div>
          ) : (
            <div className="completed"> </div>
          )}
        </>
      ) : (
        <>
        <div> <Contact /></div>
        </>
      )}
    </>
  );
}

export default Preloader;