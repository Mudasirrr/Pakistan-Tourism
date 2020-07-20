
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import React from "react";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";
// import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";

import useWebAnimations, {heartBeat}from "@wellyshen/use-web-animations";

export default function Footer() {
  const { keyframes, timing } = heartBeat;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      iterations:Infinity,
      delay: 1000, // Delay 1s
      duration: timing.duration * 0.75, // Speed up the animation
    },
  });

    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
            <p  style={{color:"yellow"}}>
              <b>CAN'T WAIT TO GET INVOLVED</b>
            </p>
            <p  style={{color:"yellow"}}>
              <b>CONNECT WITH US NOW</b>
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://web.facebook.com/mudasir.hussain.1671897">
                    <Facebook width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://twitter.com/">
                    <Twitter width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.linkedin.com/in/mudasir-hussain-a88804166/">
                    <Linkedin width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
            <h3>copyright 2020</h3><p ref={ref} style={{color:"yellow",fontSize:"60px"}}>Mudasir Hussain</p>
          </footer>
        </Container>
      </div>
    );
  }
