import React from "react";
import Header from "./components/Header";
import Nav from "./components/Navbar2";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/ProjectContainer";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Nav></Nav>
        <Header/>
        <About />
        <Project />
        <Contact />
      </div>
    )
  }
}


