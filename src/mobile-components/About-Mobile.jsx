import React, { Container, Row } from "react-bootstrap";

export default function AboutMobile() {
  return (
    <Container id="about-mob" fluid className="about-me-mobile-container">
      <Row className="justify align">
        <h2 className="justify">About Me</h2>
        <p>
          {" "}
          I am a self taught frontend developer with a Master&apos;s Degree in Information
          Technology. From the moment I discovered my passion for web development, I have
          fully dedicated myself to learning as much as possible. I can create responsive
          applications with or without tools and frameworks like React and Bootstrap and
          style them with CSS. I can also connect these applications to things such as
          databases and API&apos;s. Outside of web development, I have experience in creating and
          managing databases. I also have experience in using Python to create a machine
          learning model. I am excited to see what the future holds and am looking forward to
          growing my skills as a developer.
        </p>
      </Row>
    </Container>
  );
}
