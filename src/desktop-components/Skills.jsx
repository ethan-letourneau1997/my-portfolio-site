import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mongoIcon from "../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png";
import webpackIcon from "../icons/icons8-webpack.svg";

export default function Skills() {
  return (
    <Container className="skills-container">
      <Row>
        <Row>
          <h2 className="justify">My Skills</h2>
        </Row>
        <Row>
          <Row className="skill-row-1">
            <Col />
            <Col />
            <Col className="skill">
              <i className="fa-brands fa-html5" />
              <p>HTML5</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-css3-alt" />
              <p>CSS3</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-square-js" />
              <p>JavaScript</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-react" />
              <p>React</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-bootstrap" />
              <p>Bootstrap</p>
            </Col>
            <Col />
            <Col />
          </Row>
          <Row className="skill-row-2">
            <Col />
            <Col />
            <Col className="skill">
              <img src={webpackIcon} alt="Webpack icon" />
              <p>Webpack</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-node-js" />
              <p>node.js</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-python" />
              <p>Python</p>
            </Col>
            <Col className="skill">
              <i className="fa-brands fa-java" />
              <p>Java</p>
            </Col>
            <Col className="skill">
              <img src={mongoIcon} alt="mongoDB icon" />
              <p>MongoDB</p>
            </Col>
            <Col />
            <Col />
          </Row>
        </Row>
      </Row>

      <Row className="page-butn-row">
        <a href="#Projects_I" className="go-to-butn btn btn-lg outline-light">
          What have I made?
        </a>
      </Row>
    </Container>
  );
}
