import React from "react";
import { Container } from "react-bootstrap";
import testImage from "../img/nasaRedux.png";

export default function Wireframe() {
  return (
    <Container className="wireframe">
      <div className="device-outer">
        <div className="device">
          <div className="image-div">
            <img src={testImage} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}
