import React from "react";
import "../App.css";
import Hero from "./Hero";
import About from "./About";
import Package from "./Package";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
              <div>
                <Hero />
                <About />
                <Package />
                <Services />
                <Contact />
                <Footer />
      </div>
      
    </div>
  )
}

