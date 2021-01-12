import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Contact extends Component {
    render() {
        return (
            <div to="contact">
                <div className="container-fluid bg-dark text-center"style={{height: '75px'}}>
                    <p className="display-4 h3 mt-5 mb-5" style={{color: 'white', fontWeight:"bold" , 
                    textDecoration:"underline"}}>Contact</p>
                </div> 
                <div className="container-fluid" id="contact">
                <div className="social-container">
                <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                    <li>
                    <a href="https://www.facebook.com/Prateekkt1/" className="facebook social">
                         <FontAwesomeIcon icon={faFacebook} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://github.com/Enforc3rr" className="github social">
                         <FontAwesomeIcon icon={faGithub} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/prateek-kumar-2252ab1a3/" className="linkedin social">
                         <FontAwesomeIcon icon={faLinkedin} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/Enforc3rr" className="twitter social">
                         <FontAwesomeIcon icon={faTwitter} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://t.me/Enforc3rr" className="telegram social">
                         <FontAwesomeIcon icon={faTelegram} size="2x" />
                         </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Contact