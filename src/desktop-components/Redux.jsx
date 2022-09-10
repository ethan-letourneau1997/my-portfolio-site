/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { responsive, placeholder, AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import nasaRedux from "../img/nasaRedux.jpg";
import nasaOG from "../img/nasaOG.jpg";

const popover = (
  <Popover
    style={{ backgroundColor: "rgb(37, 37, 37)", color: "white" }}
    id="popover-basic"
  >
    <Popover.Header as="h3">Attributions</Popover.Header>
    <Popover.Body>
      <Row>
        <span>Background photo by Bob Price</span>
      </Row>
      <Row>
        <span>Icons from:</span>
      </Row>
      <Row className="popover-icon-row">
        <Col>
          &nbsp;&nbsp;
          <a href="https://icons8.com/">Icons 8</a>
        </Col>
      </Row>
      <Row>
        <Col>
          &nbsp;&nbsp;
          <a href="https://fontawesome.com/">Font Awesome</a>
        </Col>
      </Row>
      <Row>
        <div className="divide" />
      </Row>
      <Row>
        <p>
          A special thanks to my amazing fiance Abbi, for her endless support
          and neverending faith in me.
        </p>
      </Row>
    </Popover.Body>
  </Popover>
);

export default function Redux() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "eletourneau",
    },
  });

  const nasaOld = cld.image("nasaOG_lngjrb");
  const nasaNew = cld.image("nasaRedux_qc8qpd");

  nasaOld.format("auto").quality("auto");
  nasaNew.format("auto").quality("auto");

  return (
    <Container className="redux-container d-none d-xl-block" fluid>
      <Row>
        <h2 className="justify">NASA Reimagined</h2>
      </Row>
      <Row>
        <div className="justify">
          <p>
            A reimagining of the NASA website. An increased emphasis is put on
            the images. The amount of information is condensed.
          </p>
        </div>
      </Row>
      <Row className="tip-row d-none d-xl-block">
        <span className="tip justify">TIP: Try scrolling in each device</span>
      </Row>
      <Row>
        <Col>
          <h5 className="justify">Original Site</h5>
        </Col>
        <Col>
          <h5 className="justify">Reimagined</h5>
        </Col>
      </Row>
      <Row className="img-row">
        <Col className="d-none d-xl-block w-100">
          <div className="img-container-1 justify">
            <div id="nasa-img-1" className="img-div justify">
              <div>
                <LazyLoadImage
                  width="469px"
                  height="803px"
                  effect="blur"
                  src={nasaOG} // use normal <img> attributes as props
                />
              </div>
            </div>
          </div>
        </Col>
        <Col className="d-none d-xl-block w-100">
          <div className="img-container-2 justify">
            <div id="nasa-img-2" className="img-div justify">
              <LazyLoadImage
                width="469px"
                height="803px"
                effect="blur"
                src={nasaRedux} // use normal <img> attributes as props
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="projects-2-butn-row">
        <Col className="justify">
          <Button
            variant="outline-light"
            href="https://nasa-redux-beige.vercel.app/#features"
            className="btn btn-lg outline-light demo-butn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
        </Col>
        <Col className="justify">
          <Button
            variant="outline-light"
            href="https://github.com/ethan-letourneau1997/nasa-redux"
            className="btn btn-lg outline-light code-butn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
        </Col>
      </Row>
      <Row className="overlay-row">
        <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
          <Button className="attribution-butn" variant="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </Button>
        </OverlayTrigger>
      </Row>
    </Container>
  );
}
