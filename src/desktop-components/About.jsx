/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Container, Row, Button } from "react-bootstrap";

export default function About() {
  return (
    <Container className="about-me-container">
      <Row className="justify">
        <h2 className="justify">About Me</h2>
        <p className="about-me-text">
          I am a self taught frontend developer with a Master&apos;s Degree in
          Information Technology. From the moment I discovered my passion for
          web development, I have fully dedicated myself to learning as much as
          possible. I can create responsive applications with (or without) tools
          and frameworks like React and Bootstrap and style them with CSS. I can
          also integrate these applications with databases and API&apos;s.
          Additionally, I have experience with creating and mantaining
          databases. I also have experience in using Python to create a machine
          learning model. I am excited to see what the future holds and am
          looking forward to growing my skills as a developer.
        </p>
      </Row>
      <Row className="socials-row justify">
        <Button
          className="socials"
          href="https://www.linkedin.com/in/ethan-letourneau-26b387147/"
          variant=""
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Button>
        <Button
          className="socials"
          href="https://github.com/ethan-letourneau1997"
          variant=""
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-github"></i>
        </Button>
        <Button
          variant=""
          className="socials"
          href="mailto: ethan.michael.letourneau@gmail.com"
          size="lg"
        >
          <i className="fa-regular fa-envelope"></i>
        </Button>
      </Row>
      <Row className="page-butn-row">
        <Button className="go-to-butn" href="#Skills" variant="" size="lg">
          What can I do?
        </Button>
      </Row>
    </Container>
  );
}
