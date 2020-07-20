import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Contact() {

const { ref} = useWebAnimations({
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
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Contact</h1>
            <p>GET IN TOUCH WITH US</p>
          </header>
          <section className="svg-group text-center">
            <Row >
              
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>+92-3060205253</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3"ref={ref}>
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p style={{color:"yellow"}}>Islamabad, Pakistan</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>hmudasir714@gmail.com</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message"
                  />
                  <Button outline color="light" className="float-left">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }