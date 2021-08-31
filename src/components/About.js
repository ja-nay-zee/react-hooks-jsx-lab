import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I just moved to New York City a week ago and started my new job as a Web Developer!</p>
    <img src={ image } alt="I made this" />
  </div>
  )
}

export default About;
