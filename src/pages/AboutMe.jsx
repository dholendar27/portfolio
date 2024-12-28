import { Fragment } from "react";
import { ReactComponent as AboutMeSVG } from "../assets/aboutme.svg";
import "./AboutMe.css";
export default function AboutMe() {
  return (
    <Fragment>
      <h4 className="aboutme-title" id="aboutme">
        About <span>Me</span>
      </h4>
      <div className="aboutme-container">
        <div className="about-me-svg">
          <img src="src/assets/aboutme.jpg" />
        </div>
        <div className="info-about-me">
          <div>
            I'm a passionate, self-taught Python developer with a strong focus
            on building dynamic web applications. With expertise in frameworks
            like Django and Flask, along with frontend technologies like
            React.js, I’m dedicated to creating seamless, user-friendly
            experiences through clean, efficient code.
          </div>
          <div>
            I began my development journey in 2022 and have steadily evolved as
            a developer by embracing new challenges and constantly learning.
            Now, I'm focused on building scalable and high-performance web applications using modern tools and
            technologies such as Python, Django, Flask, React, TypeScript, and
            more.
          </div>
          <div>
            When I’m not coding, you’ll often find me exploring the latest in
            gaming or diving into the depths of the internet for inspiration and
            learning.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
