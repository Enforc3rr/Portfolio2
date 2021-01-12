import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export class Project extends Component {
    render() {
        return this.props.projects.map(
            proj => (
                    <div className="card-body card shadow p-3 mb-5 mr-5 ml-5 bg-white rounded" style={{width: "18rem"}}>
                    <h5 className="card-title text-center" style={{textDecoration: "underline" , textDecorationColor:"#128C7E"}}>{proj.title}</h5>
                    <p className="card-text text-center">{proj.language}</p>
                    <p className="card-text text-center">{proj.tech}</p>
                    <div className="card-foote text-center">
                    <a href={proj.github} className="card-link">Github Link Of Project</a>
                    </div>
                </div>
            )
        )
    }
}


export default Project;
