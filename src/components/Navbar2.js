import React, { Component } from 'react';
import {Link} from "react-scroll";
import { Navbar,Nav} from "react-bootstrap";


export class Navbar2 extends Component {
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link className="navbar-brand" to="home"
                    hashSpy={true}
                    offset={-50}
                    isDynamic={true}
                    spy={true} 
                    smooth={true}>Prateek Kumar</Link>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link className="nav-item nav-link active" to="about"
                    hashSpy={true}
                    offset={-50}
                    isDynamic={true}
                    spy={true} 
                    smooth={true}>About</Link>
                    <Link className="nav-item nav-link active" to="projects"
                    hashSpy={true}
                    offset={-50}
                    isDynamic={true}
                    spy={true} 
                    smooth={true}>Projects</Link>
                    <Link className="nav-item nav-link active" to="contact"
                    hashSpy={true}
                    offset={-50}
                    isDynamic={true}
                    spy={true} 
                    smooth={true}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbar2
