import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Particles from "particles-bg";

export default class Header extends React.Component {
    render() {
        return (
            <header id="home">
                <div className="container-fluid" style={{position:"relative"}}>
                    <img src="https://robohash.org/test" className="img-responsive center-block d-block mx-auto"  alt=""  />
                     <p className="h1 text-center display-3 mt-5" style={{fontWeight:"bold" , textDecoration: "underline"}}>
                        Prateek Kumar</p>
                        <p className="text-center h3 mt-3" style={{fontWeight:"bold" , textDecoration: "underline"}}>
                            Backend Engineer</p>
                        <p className="text-center h5 mt-3" style={{textDecoration: "underline"}}>2nd Year Undergrad</p>
                        <p className="text-center text-muted mt-3">Prateekkumartiwari01@gmail.com</p>
                        <p className="text-center text-muted mt-3">+91-8400726712</p>
                        <div className ="text-center mb-4">
                        <a className="btn btn-lg btn-secondary"
                         href="https://docs.google.com/document/d/1viCshclR4wMbks5lOBR0KjJiV2wPIAf1STkCXFS-l84/edit?usp=sharing" role="button">Resume</a>
                        </div>
                        <Particles type="cobweb" num={window.innerWidth/12} bg={true}  />
                   </div>
            </header>
        )
    }
}
