/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable comma-dangle */

import React, {
  Container,
  Row,
  Col,
  Offcanvas,
  Form,
  ButtonGroup,
  ToggleButton,
  Modal,
  Button,
} from "react-bootstrap";

import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { responsive, placeholder, AdvancedImage } from "@cloudinary/react";
import ProjectButnRow from "./project-button-row/ProjectButnRow";
import mongoIcon from "../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png";
import inventManageDesk from "../project-img/desktop-inventory-management.png";
import inventManageMobile from "../project-img/iphone-inventory-management.png";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

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
  const inventoryManagementMobile = cld.image(
    "iphone-inventoyr-management_qwy4g3"
  );
  const inventoryManagementDesktop = cld.image(
    "desktop-inventory-management_zwu4o0"
  );
  const resumeMobile = cld.image("iphone-resume_cu6owm");
  const resumeDesktop = cld.image("desktop-resume_fqycwx");
  const calculatorMobile = cld.image("calc-mobile_y1rtmd");
  const calculatorDesktop = cld.image("desktop-calc_mhr5nr");
  const weatherMobile = cld.image("mobile-weather_wegpxe");
  const weatherDesktop = cld.image("desktop-weather_xbtfha");

  inventoryManagementMobile.format("auto").quality("auto");

  inventoryManagementDesktop.format("auto").quality("auto");
  resumeMobile.format("auto").quality("auto");
  resumeDesktop.format("auto").quality("auto");
  calculatorMobile.format("auto").quality("auto");
  calculatorDesktop.format("auto").quality("auto");
  weatherMobile.format("auto").quality("auto");
  weatherDesktop.format("auto").quality("auto");

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

      {radioValue === "1" ? (
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
          <Offcanvas
            className="offcanvas-desktop"
            show={show}
            onHide={handleClose}
            backdrop={false}
          >
            <Offcanvas.Header closeVariant="white">
              <Offcanvas.Title>
                Inventory Management Application
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row className="card-about-row">
                <span className="bold justify">About</span>
              </Row>
              <Row>
                <p>
                  An inventory management application for the fictional company
                  &apos;Great Outdoors&apos;. It is a CRUD (create, read, update
                  delete) application that stores records in MongoDB. Feel free
                  to play around by adding or editing items!
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
              <AdvancedImage
                cldImg={inventoryManagementDesktop}
                style={{ maxWidth: "54%" }}
                plugins={[
                  responsive({ steps: 100 }),
                  placeholder({ mode: "predominant" }),
                ]}
              />
              <AdvancedImage
                cldImg={inventoryManagementMobile}
                style={{ maxWidth: "22%" }}
                plugins={[
                  responsive({ steps: 100 }),
                  placeholder({ mode: "predominant" }),
                ]}
              />
              <Button
                variant="outline-light fullscreen-butn"
                onClick={() => setShowModal(true)}
              >
                <i className="fa-solid fa-magnifying-glass" />
              </Button>
            </div>
            <ProjectButnRow
              hrefDemo="https://great-outdoors-inv-management.herokuapp.com/catalog/items"
              hrefCode="https://github.com/ethan-letourneau1997/Great-Outdoors-Inventory-Management"
            />
          </div>
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
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
              <Row className="desktop-proj-img-row-modal">
                <Col>
                  <img src={inventManageDesk} alt=""></img>
                </Col>
                <Col>
                  <img src={inventManageMobile} alt=""></img>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </Row>
      ) : null}

      {radioValue === "2" ? (
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
          <Offcanvas
            className="offcanvas-desktop"
            show={show}
            onHide={handleClose}
            backdrop={false}
          >
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
                  information on their resume{" "}
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
            <AdvancedImage
              cldImg={resumeDesktop}
              style={{ maxWidth: "54%" }}
              plugins={[
                responsive({ steps: 100 }),
                placeholder({ mode: "predominant" }),
              ]}
            />
            <AdvancedImage
              cldImg={resumeMobile}
              style={{ maxWidth: "22%" }}
              plugins={[
                responsive({ steps: 100 }),
                placeholder({ mode: "predominant" }),
              ]}
            />
          </div>
          <ProjectButnRow
            hrefDemo="https://resume-project-two.vercel.app/"
            hrefCode="https://github.com/ethan-letourneau1997/resume-project"
          />
        </Row>
      ) : null}

      {radioValue === "3" ? (
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
          <Offcanvas
            className="offcanvas-desktop"
            show={show}
            onHide={handleClose}
            backdrop={false}
          >
            <Offcanvas.Header>
              <Offcanvas.Title>Calculator Application</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row className="card-about-row">
                <span className="bold justify">About</span>
              </Row>
              <Row>
                <p>
                  A simple calculator application made with pure JavaScript{" "}
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
                <Col />
              </Row>
            </Offcanvas.Body>
          </Offcanvas>
          <div className="desktop-proj-img-row">
            <AdvancedImage
              cldImg={calculatorDesktop}
              style={{ maxWidth: "54%" }}
              plugins={[
                responsive({ steps: 100 }),
                placeholder({ mode: "predominant" }),
              ]}
            />
            <AdvancedImage
              cldImg={calculatorMobile}
              style={{ maxWidth: "22%" }}
              plugins={[
                responsive({ steps: 100 }),
                placeholder({ mode: "predominant" }),
              ]}
            />
          </div>
          <ProjectButnRow
            hrefDemo="https://calculator-ia6lr48wx-ethan-letourneau1997.vercel.app/"
            hrefCode="https://github.com/ethan-letourneau1997/calculator"
          />
        </Row>
      ) : null}

      {radioValue === "4" ? (
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
          <Offcanvas
            className="offcanvas-desktop"
            show={show}
            onHide={handleClose}
            backdrop={false}
          >
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
                  A weather forecasting Application that makes use of
                  OpenWeather API to provide users with weather data based on
                  searched locations{" "}
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
            <AdvancedImage
              cldImg={weatherDesktop}
              style={{ maxWidth: "54%" }}
              plugins={[
                responsive({ steps: 100 }),
                placeholder({ mode: "predominant" }),
              ]}
            />
            <AdvancedImage
              cldImg={weatherMobile}
              style={{ maxWidth: "22%" }}
              plugins={[
                responsive({ steps: 100 }),
                placeholder({ mode: "predominant" }),
              ]}
            />
          </div>
          <ProjectButnRow
            hrefDemo=""
            hrefCode="https://github.com/ethan-letourneau1997/weather-app"
          />
        </Row>
      ) : null}
    </Container>
  );
}
