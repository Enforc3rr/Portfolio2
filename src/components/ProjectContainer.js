import React, { Component } from 'react';
import Project from "./Project";
import "bootstrap/dist/css/bootstrap.min.css";

export class ProjectContainer extends Component {
    render() {
        return (
            <div id="projects"  >    
                <div className="container-fluid bg-dark text-center" style={{height: '100px'}}>
                    <p className="display-3 h3 mt-5 mb-5" style={{color: 'white', fontWeight:"bold" , 
                    textDecoration:"underline"}}>Projects</p>
                </div> 
                <div className="container">   
                    <div className="d-flex flex-wrap mt-3">
                        <Project projects={projects} />
                    </div>
               </div>
            </div>
        )
    }
}

const projects = [
    {
        id : 1 ,
        title : "Food Ordering WebApp" ,
        language : "Java",
        tech : "Spring Boot" ,
        github :"https://github.com/Enforc3rr/SpringBoot-SmallScale-eFoodOrdering"
    },
    {
        id : 2 ,
        title : "Review Management WebApp" ,
        language : "Java" ,
        tech : "Spring Boot",
        github :"https://github.com/Enforc3rr/Review-Managment-WebApp"
    },
    {
        id : 3 ,
        title : "Portfolio" ,
        language : "Javascript" ,
        tech : "React.Js",
        github :""
    },
    {
        id : 4 ,
        title : "Todo WebApp" ,
        language : "Javascript" ,
        tech : "React.Js" ,
        github :"https://github.com/Enforc3rr/Todo-App"
    },
    {
        id : 5 ,
        title : "Book Review" ,
        language : "Java",
        tech : "Core Java" ,
        github :"https://github.com/Enforc3rr/Book-Management-System"
    },
    {
        id : 6 ,
        title : "Father-Son Height Predictor" ,
        language : "Python",
        tech : "Scikit Learn" ,
        github :"https://github.com/Enforc3rr/ML-father-son-height-predictor"
    }
  ]
export default ProjectContainer;
