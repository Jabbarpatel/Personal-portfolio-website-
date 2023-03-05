import React from "react";
import './Navbaar.css'
function Navbaar()
{
    return(
        <div className="n-wrapper">
          <div className="n-left">
            <div className="n-name">Jabbar</div>
            <span>Toggle</span>
          </div>
          <div className="n-right">
            <div className="n-list">
               <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Tesimonial</li>
               </ul>
            </div>
            <button className="button n-button">Contact</button>
          </div>
        </div>   
    )
}
export default Navbaar