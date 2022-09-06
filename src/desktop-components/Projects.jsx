/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  Container, Row, Col, Offcanvas,
  Tooltip, Form, ButtonGroup, ToggleButton,
  Button, OverlayTrigger, Popover,
} from "react-bootstrap";
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { responsive, placeholder, AdvancedImage } from "@cloudinary/react";
import mongoIcon from "../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png";

export default function Projects() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming Soon!
    </Tooltip>
  );

  const [radioValue, setDesktopRadioValue] = useState("1");

  const desktopRadios = [
    { name: "Inventory Management", value: "1" },
    { name: "Resume Builder", value: "2" },
    { name: "Calculator App", value: "3" },
    { name: "Weather Forecast", value: "4" },
  ];

  const cld = new Cloudinary({
    cloud: {
      cloudName: "eletourneau",
    },
  });
  const inventoryManagementMobile = cld.image("iphone-inventoyr-management_qwy4g3");
  const inventoryManagementDesktop = cld.image("desktop-inventory-management_zwu4o0");
  const resumeMobile = cld.image("iphone-resume_cu6owm");
  const resumeDesktop = cld.image("desktop-resume_fqycwx");
  const calculatorMobile = cld.image("calc-mobile_y1rtmd");
  const calculatorDesktop = cld.image("desktop-calc_mhr5nr");
  const weatherMobile = cld.image("mobile-weather_wegpxe");
  const weatherDesktop = cld.image("desktop-weather_xbtfha");

  inventoryManagementMobile
    .format("auto")
    .quality("auto");
  // .resize(limitFit().width(500).height(500));
  inventoryManagementDesktop
    .format("auto")
    .quality("auto");
  // .resize(limitFit().width(500).height(500));
  resumeMobile
    .format("auto")
    .quality("auto");
  resumeDesktop
    .format("auto")
    .quality("auto");
  calculatorMobile
    .format("auto")
    .quality("auto");
  calculatorDesktop
    .format("auto")
    .quality("auto");
  weatherMobile
    .format("auto")
    .quality("auto");
  weatherDesktop
    .format("auto")
    .quality("auto");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleSwitch = () => {
    if (show === false) {
      handleShow();
    } else if (show === true) {
      handleClose();
    }
  };

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
            A special thanks to my amazing fiance Abbi, for her endless support and neverending
            faith in me.
          </p>
        </Row>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="desktop-projects-container">
      <ButtonGroup>
        {desktopRadios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-light"
            name="radio"
            className="radio-desktop"
            value={radio.value}
            checked={radioValue === radio.value}
            onClick={handleClose}
            onChange={(e) => setDesktopRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {radioValue === "1"

        ? (
          <Row>
            <div className="proj-info-cont justify align">
              <div />
              <h3 className="justify">Inventory Management Site</h3>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Show Project Details"
                  onClick={toggleSwitch}
                />
              </Form>
            </div>
            <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose} backdrop={false}>
              <Offcanvas.Header closeVariant="white">
                <Offcanvas.Title>Inventory Management Application</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Row className="card-about-row">
                  <span className="bold justify">About</span>
                </Row>
                <Row>
                  <p>
                    An inventory management application for the fictional
                    company &apos;Great Outdoors&apos;. It is a CRUD (create, read,
                    update delete) application that stores records in MongoDB.
                    Feel free to play around by adding or editing items!

                  </p>
                </Row>
                <Row className="card-made-with-row">
                  <span className="bold justify">Made With</span>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-html5" />
                      <p>HTML5</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-css3-alt" />
                      <p>CSS3</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-square-js" />
                      <p>JavaScript</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-bootstrap" />
                      <p>Bootstrap</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-node-js" />
                      <p>node.js</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <img src={mongoIcon} alt="mongoDB icon" />
                      <p>MongoDB</p>
                    </div>
                  </Col>
                </Row>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="desktop-projects-container">
              <div className="desktop-proj-img-row">
                <AdvancedImage cldImg={inventoryManagementDesktop} style={{ maxWidth: "54%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
                <AdvancedImage cldImg={inventoryManagementMobile} style={{ maxWidth: "22%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
              </div>
              <div className="row desktop-proj-butn-row">
                <a href="https://great-outdoors-inv-management.herokuapp.com/catalog/items" className="btn btn-lg outline-light demo-butn" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href="https://github.com/ethan-letourneau1997/Great-Outdoors-Inventory-Management" className="btn btn-lg outline-light code-butn" target="_blank" rel="noopener noreferrer">Code</a>
                <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
                  <Button className="attribution-butn" variant="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </Button>
                </OverlayTrigger>

              </div>
            </div>

          </Row>
        )
        : null }

      {radioValue === "2"
        ? (
          <Row>
            <div className="proj-info-cont justify align">
              <div />
              <h3>Resume Builder</h3>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Show Project Details"
                  onClick={toggleSwitch}
                />
              </Form>
            </div>
            <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose} backdrop={false}>
              <Offcanvas.Header>
                <Offcanvas.Title>Resume Builder</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Row className="card-about-row">
                  <span className="bold justify">About</span>
                </Row>
                <Row>
                  <p>
                    A React application that allows a user to enter and change
                    information on their resume
                    {" "}

                  </p>
                </Row>
                <Row className="card-made-with-row">
                  <span className="bold justify">Made With</span>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-html5" />
                      <p>HTML5</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-css3-alt" />
                      <p>CSS3</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-square-js" />
                      <p>JavaScript</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-react" />
                      <p>React</p>
                    </div>
                  </Col>
                </Row>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="desktop-proj-img-row">
              <AdvancedImage cldImg={resumeDesktop} style={{ maxWidth: "54%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
              <AdvancedImage cldImg={resumeMobile} style={{ maxWidth: "22%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
            </div>
            <div className="row desktop-proj-butn-row">
              <a href="https://resume-project-two.vercel.app/" className="btn btn-lg outline-light demo-butn" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/ethan-letourneau1997/resume-project" className="btn btn-lg outline-light code-butn" target="_blank" rel="noopener noreferrer">Code</a>
              <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
                <Button className="attribution-butn" variant="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </Button>
              </OverlayTrigger>
            </div>
          </Row>
        )
        : null}

      {radioValue === "3"
        ? (
          <Row>
            <div className="proj-info-cont justify align">
              <div />
              <h3>Calculator App</h3>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Show Project Details"
                  onClick={toggleSwitch}
                />
              </Form>
            </div>
            <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose} backdrop={false}>
              <Offcanvas.Header>
                <Offcanvas.Title>Calculator Application</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Row className="card-about-row">
                  <span className="bold justify">About</span>
                </Row>
                <Row>
                  <p>A simple calculator application made with pure JavaScript  </p>
                </Row>
                <Row className="card-made-with-row">
                  <span className="bold justify">Made With</span>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-html5" />
                      <p>HTML5</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-css3-alt" />
                      <p>CSS3</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-square-js" />
                      <p>JavaScript</p>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="desktop-proj-img-row">
              <AdvancedImage cldImg={calculatorDesktop} style={{ maxWidth: "54%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
              <AdvancedImage cldImg={calculatorMobile} style={{ maxWidth: "22%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
            </div>
            <div className="row desktop-proj-butn-row">
              <a href="https://calculator-ia6lr48wx-ethan-letourneau1997.vercel.app/" className="btn btn-lg outline-light demo-butn" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href="https://github.com/ethan-letourneau1997/calculator" className="btn btn-lg outline-light code-butn" target="_blank" rel="noopener noreferrer">Code</a>
              <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
                <Button className="attribution-butn" variant="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </Button>
              </OverlayTrigger>
            </div>
          </Row>
        )
        : null}

      {radioValue === "4"
        ? (
          <Row>
            <div className="proj-info-cont justify align">
              <div />
              <h3>Weather Forecast App</h3>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Show Project Details"
                  onClick={toggleSwitch}
                />
              </Form>
            </div>
            <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose} backdrop={false}>
              <Offcanvas.Header>
                <Offcanvas.Title>Weather Forecast Application</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Row className="card-about-row">
                  <span className="bold justify">About</span>
                </Row>
                <Row>
                  <p>
                    {" "}
                    A weather forecasting Application that makes use of OpenWeather
                    API to provide users with weather data based on searched locations
                    {" "}

                  </p>
                </Row>
                <Row className="card-made-with-row">
                  <span className="bold justify">Made With</span>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-html5" />
                      <p>HTML5</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-css3-alt" />
                      <p>CSS3</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-square-js" />
                      <p>JavaScript</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <i className="fa-brands fa-bootstrap" />
                      <p>Bootstrap</p>
                    </div>
                  </Col>
                </Row>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="desktop-proj-img-row">
              <AdvancedImage cldImg={weatherDesktop} style={{ maxWidth: "54%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
              <AdvancedImage cldImg={weatherMobile} style={{ maxWidth: "22%" }} plugins={[responsive({ steps: 100 }), placeholder({ mode: "predominant" })]} />
            </div>
            <div className="row desktop-proj-butn-row">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button size="large" disabled className="outline-light demo-butn">Demo</Button>
              </OverlayTrigger>
              <a href="https://github.com/ethan-letourneau1997/weather-app" className="btn btn-lg outline-light code-butn" target="_blank" rel="noopener noreferrer">Code</a>
              <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
                <Button className="attribution-butn" variant="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </Button>
              </OverlayTrigger>
            </div>
          </Row>
        )
        : null }
    </Container>
  );
}
