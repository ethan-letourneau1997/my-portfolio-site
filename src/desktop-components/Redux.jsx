/* eslint-disable no-unused-vars */
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import nasaRedux from "../img/nasaRedux.png";
import nasaOG from "../img/nasaOG.png";

export default function Redux() {
  return (
    <Container className="redux-container">
      <Row>
        <h2 className="justify">NASA Reimagined</h2>
      </Row>
      <Row>
        <div className="justify">
          <p>
            A reimagining of the NASA website. An increased emphasis is put on
            the images. The amount of information being thrown at the user is
            reduced.
          </p>
        </div>
      </Row>
      <Row className="justify">
        <span className="tip justify">
          You can view both sites by scrolling within a screen
        </span>
      </Row>
      <Row>
        <Col>
          <h5 className="justify">Original Site</h5>
        </Col>
        <Col>
          <h5 className="justify">My Reimagining</h5>
        </Col>
      </Row>
      <Row className="img-row">
        <Col className="justify">
          <div className="img-container-1 justify">
            <div id="nasa-img-1" className="img-div justify">
              <img className="nasa-img" alt="" src={nasaOG} />
            </div>
          </div>
        </Col>
        <Col className="justify">
          <div className="img-container-2 justify">
            <div id="nasa-img-2" className="img-div justify">
              <img className="nasa-img" alt="" src={nasaRedux} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="projects-2-butn-row">
        <Col className="justify">
          <a
            href="https://resume-project-two.vercel.app/"
            className="btn btn-lg outline-light demo-butn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </Col>
        <Col className="justify">
          <a
            href="https://github.com/ethan-letourneau1997/resume-project"
            className="btn btn-lg outline-light code-butn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </Col>
      </Row>
    </Container>
  );
}
