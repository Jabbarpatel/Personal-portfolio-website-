import React from "react";
import './Testimoniel.css'
function Testimoniel()
{
    return(
        <div className="footer">
        <div className="services">
        <div className="awesome">
         <span>Contact</span>
         <span>Information</span>
        </div>
        {/*right side*/}
        <div className="form">
            <div className="element">
          <input type="text" placeholder="Enter Name" />
          </div>
          <div className="element">
          <input type="email" placeholder="Enter Gmail" />
          </div>
          <div className="element">
          <textarea placeholder="Enter the  description" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
         </div>
        </div>
    )
}
export default Testimoniel