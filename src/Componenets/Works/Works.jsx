import React from "react";
import './Works.css'
import Upwork from '../../img/Upwork.png'
import  Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
function Works()
{
    return(
        <div className="services">
        <div className="awesome">
         <span>Interested In  </span>
         <span>Brands</span>
         <span> Upwork
            <br />
            Fiverr
            <br />
            Amazon
            <br />
            Facebook
         </span>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className="w-right">
           <div className="w-maincircle">
            <div className="w-seccircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-seccircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-seccircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-seccircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-seccircle">
                <img src={Facebook} alt="" />
            </div> 
           </div>
           <div className="w-backcircle bluecircle"></div>
           <div className="w-backcircle yellowcircle"></div>
        </div>
        </div>
    )
}
export default Works