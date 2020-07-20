import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";

import Contact from "./components/Contact";
import About from "./components/About";
import Package from "./components/Package";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
              <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
          <Tour path="tour" />

          <Contact path="contact" />
          <About path="about" />
          <Package path="package" />
          <Services path="service" />
        </Router>
        {/* <Router exact path='contact'component={Contact}/>
        <Router exact path='about'component={About}/>
        <Router exact path='package'component={Package}/>
        <Router exact path='service'component={Services}/> */}
      </div>
    </div>
  )
}