import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './jabbarpatel1947gmail.com.pdf'
function Services()
{
    return(
      <div className="services">
        <div className="awesome">
         <span>My Awesome</span>
         <span>Services</span>
         <span>Click below Button to download the CV</span>
         <a href={Resume} download>
         <button className="button s-button">Download CV</button>
         </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
          <div style={{left:'18rem'}}>
            <Card
              emoji={HeartEmoji}
              heading={'Design'}
              detail={"sketch,Adobe,Adobe xd"}
            />
          </div>
          <div style={{top:'8rem',left:'-1rem'}}>
            <Card
              emoji={Glasses}
              heading={'Developer'}
              detail={"HTML,CSS,JavaScript,React.JS"}
            />
          </div>
          <div style={{top:'19rem',left:'16rem'}}>
            <Card
              emoji={Humble}
              heading={'UI/UX'}
              detail={"Expertice in Designing of User Interface"}
            />
          </div>
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}>
          
        </div>
      </div>
    )
}
export default Services