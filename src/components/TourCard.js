import React from "react";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

const TourCard = ({ tourcard }) => {
  // const { ref,playState, getAnimation } = useWebAnimations({
  //   keyframes:[
  //     { transform: "translateX(0px)" },
  //       { transform: "translateX(100px)", }],
     
  //   timing: {
  //       duration: 1000, 
  //       fill: "forwards",
  //       iterations:Infinity,
  //       direction:"alternate",
  //       easing:"ease-out"
  //     // easing:"steps(3,end)"
  //    },
     
  //   onUpdate: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the running state or changes state
  //     console.log("Play State:",playState);
  //     console.log("animate:",animate);
  //   },
  
  // });
  // const inputE1=useRef(null);
 const { keyframes, timing } = heartBeat;
const { ref } = useWebAnimations({
  keyframes,
  timing: {
    ...timing,
    iterations:Infinity,
    delay: 1, // Delay 1s
    duration: timing.duration * 5.75, // Speed up the animation
  },
});
  const { img, alt, title, subtitle } = tourcard;
  return (
    <div ref={ref}>
    <Card >
      <CardImg  ref={ref}  top width="100%" src={img} alt={alt} />
      <CardBody>
        <Button outline color="secondary" className="float-right"  ref={ref} href="tour">
          Read more
        </Button>
        <CardTitle  ref={ref}>{title}</CardTitle>
        <CardSubtitle >{subtitle}</CardSubtitle>
      </CardBody>
    </Card></div>
  );
};
export default TourCard;
