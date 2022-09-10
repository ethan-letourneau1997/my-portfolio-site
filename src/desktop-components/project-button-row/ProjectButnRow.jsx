import React from "react";
import "./projectButnRow.css";
import { Row, Button } from "react-bootstrap";

export default function ProjectButnRow(hrefDemo, hrefCode) {
  return (
    <Row className="project-button-row">
      <Button
        variant="outline-light"
        href={hrefDemo}
        size="lg"
        className="demo-button project-button"
      >
        Demo
      </Button>
      <Button variant="" href="#Projects_II" className="angle-button">
        <i className="down-arrow fa-solid fa-angle-down" />
      </Button>
      <Button
        variant="outline-light"
        href={hrefCode}
        size="lg"
        className="code-button project-button"
      >
        Code
      </Button>
    </Row>
  );
}
