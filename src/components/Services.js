import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
// import MainCarousel from "./Carousel";
import { ReactComponent as Trending } from "../assets/svg/trending-up.svg";
import { ReactComponent as Flag } from "../assets/svg/flag.svg";
import { ReactComponent as Monitor } from "../assets/svg/monitor.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import useWebAnimations  from "@wellyshen/use-web-animations";

export default function Services() {
  const { ref } = useWebAnimations({
    keyframes:[
      { transform: "translateY(5px)" },
        { transform: "translateY(50px)", }],
     
    timing: {
        duration: 2500, 
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
    <div className="wrapped-services">
      <div className="subComponent" id="servicesBody">
        <Container>
          <section className="svg-group text-center" ref={ref}>
            <Row>
              <Col lg="3" md="6" sm="6">
                <div className="svg-card-2" style={{color:"yellow"}}>
                  <Trending width="50" height="55" strokeWidth="1" />
                  <p>Promote Best Tours</p>
                </div>
              </Col>
              <Col lg="3" md="6" sm="6">
                <div className="svg-card-2"style={{color:"yellow"}}>
                  <Monitor width="55" height="55" strokeWidth="1" />
                  <p>Showcase Tourist Spot</p>
                </div>
              </Col>
              <Col lg="3" md="6" sm="6">
                <div className="svg-card-2"style={{color:"yellow"}}>
                  <Flag width="55" height="55" strokeWidth="1" />
                  <p>Best Travel Routes</p>
                </div>
              </Col>
              <Col lg="3" md="6" sm="6">
                <div className="svg-card-2"style={{color:"yellow"}}>
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Tour Guides</p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </div>
  )
}
