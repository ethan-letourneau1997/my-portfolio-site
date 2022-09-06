import React, { Container, Row, Button } from "react-bootstrap";

export default function HomepageMobile() {
  return (
    <Container id="home-mob" fluid className=" homepage-mobile">
      <Row>
        <h1 className="justify">Ethan Letourneau</h1>
      </Row>
      <Row>
        <h2 className="justify">Frontend Developer</h2>
      </Row>
      <Row className="page-butn-row">
        <Button className="go-to-butn-mob justify" href="#about-mob" variant="outline-light" size="lg">Who am I?</Button>
      </Row>
    </Container>
  );
}
