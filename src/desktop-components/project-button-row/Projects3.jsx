/* eslint-disable object-curly-newline */

import { React, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import socialNetworkDesktop from "../../img/socialNetworkDesktop.png";
import socialNetworkIpad from "../../img/socialNetworkIpad.png";
import socialNetworkIphone from "../../img/socialNetworkIphone.png";
import socialNetworkSamsung from "../../img/socialNetworkSamsung.png";

export default function Projects3() {
  const [show, setShow] = useState(false);

  const [mobile, setMobile] = useState(false);

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="justify align projects3-header-col">
          <h2 className="justify">Responsive Landing Page</h2>

          <BootstrapSwitchButton
            offlabel="desktop"
            onlabel="mobile"
            onChange={toggleMobile}
            onstyle="dark"
            offstyle="dark"
            width={100}
          />
        </Col>
      </Row>

      {mobile === false ? (
        <Row className="img-button-row">
          <img
            className="social-network-desktop"
            src={socialNetworkDesktop}
            alt=""
          />
          <Button
            variant="outline-light fullscreen-butn"
            onClick={() => setShow(true)}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </Row>
      ) : (
        <Row className="social-network-mobile-row">
          <Col className="mob-col-1">
            <img src={socialNetworkIphone} alt="" />
          </Col>
          <Col className="mob-col-2">
            <img src={socialNetworkIpad} alt="" />
          </Col>
          <Col className="d-none d-xl-block mob-col-3">
            <img src={socialNetworkSamsung} alt="" />

            <Button
              variant="outline-light fullscreen-butn"
              onClick={() => setShow(true)}
            >
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
          </Col>
        </Row>
      )}
      <Row className="project-3-btn-row">
        <Col md="auto">
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
        <Col md="auto">
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
        {mobile === false ? (
          <Modal.Body>
            <img
              className="social-network-desktop-modal"
              src={socialNetworkDesktop}
              alt=""
            />
          </Modal.Body>
        ) : (
          <Modal.Body className="mobile-modal-body">
            <img
              className="social-network-mobile-modal"
              src={socialNetworkIphone}
              alt=""
            />

            <img
              className="social-network-mobile-modal"
              src={socialNetworkIpad}
              alt=""
            />

            <img
              className="social-network-mobile-modal"
              src={socialNetworkSamsung}
              alt=""
            />
          </Modal.Body>
        )}
      </Modal>
    </Container>
  );
}
