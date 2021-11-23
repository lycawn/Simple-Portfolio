import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p className="copyrights">Copyrights by Angelos Antoniades {year}</p>
            
        </div>
    )

}
export default Footer;