import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "UI/UX Developer", "React Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="/assets/my.jpg" alt="sample" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, My name is</h2>
          <h1>Rohan Verma</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <KeyboardArrowDown className="icon" />
        </div>
      </div>
    </div>
  );
}
