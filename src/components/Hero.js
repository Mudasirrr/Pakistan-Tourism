import React from "react";
import { Button } from "reactstrap";
import "../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

import { Transition } from 'react-transition-group';

export default function Hero({ in: inProp }) {
//   const { keyframes, timing } = flash;
// const { ref } = useWebAnimations({
//   keyframes,
//   timing: { 
//     ...timing,
//     delay: 1, // Delay 1s
//     duration: timing.duration * 20.75, // Speed up the animation
//   },
// });
const { ref } = useWebAnimations({
  keyframes:[
    { transform: "translateX(0px)" },
          { transform: "translateY(100px)" },
      { transform: "translateX(500px)",background:"black" }],
   
  timing: {
      duration: 2000, 
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
      
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          {/* <App2/> */}
          <Transition in={inProp} timeout={100}>
    {state => (
      <div>
        {/* I am {state} */}
      </div>
    )}
  </Transition>
          <h1 ref={ref} >Pakistan Tourism</h1>
          <h3 >Tours | Travel | Guide</h3>
          <Button outline color="warning" href="about">
            Explore More
          </Button>{" "}
        </div>
      </section>
    </main>
    </div>
  )
}
