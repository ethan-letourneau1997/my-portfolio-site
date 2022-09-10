/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import React, { Container, Row, Button } from "react-bootstrap";

export default function Homepage() {
  return (
    <Container className="desktop-home-container">
      <Row>
        <h1 className="justify">Ethan Letourneau</h1>
        <h2 className="justify">Web Developer</h2>
      </Row>

      <Row className="page-butn-row">
        <Button
          className="go-to-butn"
          href="#About"
          variant="outline-light"
          size="lg"
        >
          Who am I?
        </Button>
      </Row>
    </Container>
  );
}
