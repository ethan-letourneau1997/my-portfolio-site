/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */

import { React, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import NasaOG from "../img/nasaOGIpad.png";
import NasaRedux from "../img/nasaReduxIpad.png";

export default function ReduxV2() {
  const [show, setShow] = useState(false);

  return (
    <Container className="redux-v2-container" fluid>
      <Row>
        <h2 className="justify"> NASA Reimagined</h2>
      </Row>
      <Row>
        <p className="justify">
          A reimagining of the NASA website. Drag the slider to see the
          comparison.
        </p>
      </Row>
      <Row>
        <Col />
        <Col className="justify">
          <h4>Original</h4>
        </Col>
        <Col className="justify">
          <h4>New</h4>
        </Col>
        <Col />
      </Row>
      <Row className="slider-row justify">
        <Row>
          <Col className="justify">
            <div className="device-row">
              <ReactCompareSlider
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      className: "slider-butn",
                      WebkitBackdropFilter: undefined,
                      backdropFilter: undefined,
                      backgroundColor: "white",
                      border: 0,
                      boxShadow: undefined,
                      color: "#444",
                    }}
                    linesStyle={{ opacity: 0.5 }}
                  />
                }
                className="compare-slider"
                itemOne={
                  <ReactCompareSliderImage
                    src={NasaOG}
                    srcSet=""
                    alt="Image one"
                    className="item-1"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={NasaRedux}
                    srcSet=""
                    alt="Image two"
                    className="item-2"
                  />
                }
                position={50}
                style={{
                  transform: "scale(1)",
                  height: "60vh",
                  width: "",
                }}
              />
            </div>
            <Button
              variant="outline-light fullscreen-butn"
              onClick={() => setShow(true)}
            >
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
          </Col>
        </Row>
      </Row>
      <Row className="project-2-btn-row">
        <Col />
        <Col className="justify">
          <Button
            type="button"
            variant="outline-light"
            href="https://nasa-redux-beige.vercel.app/"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
        </Col>
        <Col className="justify">
          <Button
            type="button"
            variant="outline-light"
            href="https://github.com/ethan-letourneau1997/nasa-redux"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
        </Col>

        <Col />
      </Row>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        fullscreen
      >
        <Modal.Header
          className="modal-header"
          closeButton
          closeVariant="white"
        />

        <Modal.Body>
          <ReactCompareSlider
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  className: "slider-butn",
                  WebkitBackdropFilter: undefined,
                  backdropFilter: undefined,
                  backgroundColor: "white",
                  border: 0,
                  boxShadow: undefined,
                  color: "#444",
                }}
                linesStyle={{ opacity: 0.5 }}
              />
            }
            className="compare-slider-modal"
            itemOne={
              <ReactCompareSliderImage
                src={NasaOG}
                srcSet=""
                alt="Image one"
                className="item-1"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={NasaRedux}
                srcSet=""
                alt="Image two"
                className="item-2"
              />
            }
            position={50}
            style={{
              transform: "scale(1)",
              height: "60vh",
              width: "",
            }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
