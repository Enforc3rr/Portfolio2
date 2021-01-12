import React, { Component } from 'react';
import Skill from "react-skillbars";
import "bootstrap/dist/css/bootstrap.min.css";

export class About extends Component {
    render() {
        return (
            <div id="about">
                {/* <p className="h1 text-center display-5" style={{fontWeight:"bold" , textDecoration:"underline"}}>About</p> */}
                <div className="container-fluid bg-dark text-center"style={{height: '100px'}}>
                    <p className="display-3 h3 mt-5 mb-5" style={{color: 'white', fontWeight:"bold" , 
                    textDecoration:"underline"}}>About</p>
                </div> 
                <div className="container">
                <div className="d-flex flex-wrap" style={{borderBottom : "1px solid" , borderBottomColor:"#C0C0C0"}}>
                    <div className="p-5 w-25"><p className="h2 text-center" style={{fontWeight:"bold",
                    textDecoration:"underline"  , textDecorationColor:"#128C7E"}}>Description</p></div>
                    <div className="container w-75 text-center">
                    <div className="container w-75">
                        <ul className="mt-3">
                            <li><p>2nd Year Undergrad</p></li>
                            <li><p>Pursuing Bachelor's In IT</p></li>
                            <li><p>Interested In Backend</p></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap" style={{borderBottom : "1px solid" ,borderBottomColor:"#C0C0C0"}}>
                    <div className="p-5  w-25"><p className="h2" style={{fontWeight:"bold",
                    textDecoration:"underline" , textDecorationColor:"#128C7E"}}>Education</p></div>
                    <div className="container  w-75 text-center">
                        <ul className="mt-3">
                            <li>Galgotias College Of Engineering And Technology</li>
                            <li style={{fontStyle:"oblique"}} className="ml-3 text-muted">(Affiliated To Abdul Kalam 
                            Technical University)</li>
                            <ul>
                                <li className="ml-4" style={{fontStyle:"italic"}}>1st Semester - 84%</li>
                                <li className="ml-4" style={{fontStyle:"italic"}}>2nd Semester - 82%</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="p-5 flex-fill bd-highlight">
                <p className="h2" style={{fontWeight:"bold",
                    textDecoration:"underline" , textDecorationColor:"#128C7E"}}>Skills</p>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                    <Skill skills={skills} colors={color} />
                </div>
            </div>
            </div>
        )
    }
}
const skills = [
    {type: "Java", level: 85},
    {type: "Data Str.", level: 80},
    {type: "SpringBoot", level: 75},
    {type: "Javascript", level: 75},
    {type: "Node+Express", level: 70},
    {type: "MongoDB", level: 65},
    {type: "MySQL", level: 60},
    {type: "Reactjs", level: 55},
    {type: "Golang", level: 50},
  ];

const color =  {
    "bar": "#525252",
    "title": {
      "text": "#fff",
      "background": "#333333"
    }
}

export default About;
