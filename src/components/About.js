import React from "react";
import { Container, Row, Col } from "reactstrap";

import flag  from '../img/pak1.gif';
import "../App.css";
import MainCarousel from "./Carousel";
import { ReactComponent as Award } from "../assets/svg/award.svg";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";

import useWebAnimations from "@wellyshen/use-web-animations";

export default function About() {
  const { ref } = useWebAnimations({
    keyframes:[
      { transform: "translateX(0px)" },
        { transform: "translateX(100px)", }],
     
    timing: {
        duration: 1200, 
        fill: "forwards",
        iterations:Infinity,
        direction:"alternate",
        easing:"ease-out"
      // easing:"steps(3,end)"
     },
     
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
      console.log("Play State:",playState);
      console.log("animate:",animate);
    },
  
  });
  // const inputE1=useRef(null);
    return (
      <div>
        <MainCarousel />

        <div className="subComponent" id="aboutBody" style={{backgroundImage: `url(${flag})`,color:"purple"
      }}>
          <Container>
            <header className="headerTitle text-center">
              <h1 >About Travel</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>
            <section className="svg-group text-center subComponent"ref={ref}>
              <Row >
                <Col lg="3" md="6" sm="6" >
                  <div className="svg-card" style={{background:"yellow"}}>
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Price Guarantee</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{background:"yellow"}}>
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{background:"yellow"}}>
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Best Travel Agent</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card" style={{background:"yellow"}}>
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Travel Insurance</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
