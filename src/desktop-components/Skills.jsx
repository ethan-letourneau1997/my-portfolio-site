import React from "react";
import mongoIcon from "../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png";
import webpackIcon from "../icons/icons8-webpack.svg";

export default function Skills() {
  return (
    <div className="container skills-container">
      <div className="skills-header-container">
        <div className="row">
          <h2 className="justify">My Skills</h2>
        </div>
        <div className="row justify">
          <div className="desktop-skills-grid">
            <div className="skill">
              <p className="fa-brands fa-html5" />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-css3-alt" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-square-js" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-react" />
              <p>React</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <img src={webpackIcon} alt="Webpack icon" />
              <p>Webpack</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-node-js" />
              <p>node.js</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-python" />
              <p>Python</p>
            </div>
            <div className="skill">
              <p className="fa-brands fa-java" />
              <p>Java</p>
            </div>
            <div className="skill">
              <img src={mongoIcon} alt="mongoDB icon" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row page-butn-row">
        <a href="#Projects_I" className="go-to-butn btn btn-lg outline-light">
          What have I made?
        </a>
      </div>
    </div>
  );
}
