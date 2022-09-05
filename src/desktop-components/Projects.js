import { Container, Row, Button, Carousel, Col, Offcanvas, CloseButton } from "react-bootstrap";
import { useState } from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { Overlay } from 'react-bootstrap'
import { Tooltip } from 'react-bootstrap'
import { useRef } from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { ToggleButton } from 'react-bootstrap'
import { Card } from "react-bootstrap";
import { Cloudinary } from '@cloudinary/url-gen'
import { fill, limitFit } from '@cloudinary/url-gen/actions/resize'
import { responsive, placeholder, AdvancedImage } from '@cloudinary/react'
import ipadInventoryManagement from '../project-img/desktop-inventory-management.png'
import iphoneInventoryManagement from '../project-img/iphone-inventory-management.png'
import ipadResumeBuilder from '../project-img/desktop-resume.png'
import iphoneResumeBuilder from '../project-img/iphone-resume.png'
import ipadCalculator from '../project-img/desktop-calc.png'
import iphoneCalculator from '../project-img/calc-mobile.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import mongoIcon from '../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png'




export default function Projects () {
    
    const [activeTab, setActiveTab] = useState('tab1')

    const switchTab1 = () => {
        setActiveTab('tab1')
        console.log(activeTab)
    }

    const switchTab2 = () => {
        setActiveTab('tab2')
        console.log(activeTab)
    }

    const switchTab3 = () => {
        setActiveTab('tab3')
        console.log(activeTab)
    }

    const switchTab4 = () => {
        setActiveTab('tab4')
        console.log(activeTab)
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Coming Soon
        </Tooltip>
    );

    const [checked, setChecked] = useState(false);
    const [radioValue, setDesktopRadioValue] = useState('1');

    const desktopRadios = [
        { name: 'Inventory Management', value: '1' },
        { name: 'Resume Builder', value: '2' },
        { name: 'Calculator App', value: '3' },
        { name: 'Weather Forecast', value: '4' }
    ];

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'eletourneau'
        }
      });
    const inventoryManagementMobile = cld.image('iphone-inventoyr-management_qwy4g3');
    const inventoryManagementDesktop = cld.image('desktop-inventory-management_zwu4o0');
    const resumeMobile = cld.image('iphone-resume_cu6owm');
    const resumeDesktop = cld.image('desktop-resume_fqycwx');
    const calculatorMobile = cld.image('calc-mobile_y1rtmd');
    const calculatorDesktop = cld.image('desktop-calc_p69q6e');
    const weatherMobile = cld.image('mobile-weather_wegpxe');
    const weatherDesktop = cld.image('desktop-weather_xbtfha');

    inventoryManagementMobile
        .format('auto')
        .quality('auto')
        // .resize(limitFit().width(500).height(500));
    inventoryManagementDesktop
        .format('auto')
        .quality('auto')
        // .resize(limitFit().width(500).height(500));
    resumeMobile
        .format('auto')
        .quality('auto')
    resumeDesktop
        .format('auto')
        .quality('auto')
    calculatorMobile
        .format('auto')
        .quality('auto')
    calculatorDesktop
        .format('auto')
        .quality('auto')
    weatherMobile
        .format('auto')
        .quality('auto')
    weatherDesktop
        .format('auto')
        .quality('auto')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                onChange={(e) => setDesktopRadioValue(e.currentTarget.value)}>
                {radio.name}
            </ToggleButton>
            ))}
        </ButtonGroup>

        {radioValue === '1' ? 
        
        <Row >
            <div className="proj-info-cont justify align">
                <h3>Inventory Management Site</h3>
                <Button className="offcanvas-desktop-butn" variant="outline-light" onClick={handleShow}>
                    <i class="fa-solid fa-circle-info"></i>
                </Button>
            </div>
            <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title>Inventory Management Application</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className="card-about-row">
                        <span className="bold justify">About</span>
                    </Row>
                    <Row >
                        <p >An inventory management application for the fictional company 'Great Outdoors'. It is a CRUD (create, read, update delete) application that stores records in MongoDB. Feel free to play around by adding or editing items!</p>
                    </Row>
                    <Row className="card-made-with-row">
                        <span className="bold justify">Made With</span>
                    </Row>
                    <Row>
                        <Col>
                            <div className="skill">
                                <i className="fa-brands fa-html5"></i>
                                <p>HTML5</p>  
                            </div>
                        </Col>
                        <Col>
                            <div className="skill">
                                <i className="fa-brands fa-css3-alt"></i>
                                <p>CSS3</p>   
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="skill">
                                <i className="fa-brands fa-square-js"></i>
                                <p>JavaScript</p>   
                            </div>
                        </Col>
                        <Col>
                            <div className="skill">
                                <i className="fa-brands fa-bootstrap"></i>
                                <p>Bootstrap</p>  
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="skill">
                                <i className="fa-brands fa-node-js"></i>
                                <p>node.js</p> 
                            </div>
                        </Col>
                        <Col>
                            <div className="skill">
                                <img src={mongoIcon}></img>
                                <p>MongoDB</p>
                            </div>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="desktop-projects-container">
                <div className="desktop-proj-img-row">
                    <AdvancedImage cldImg={inventoryManagementDesktop} style={{maxWidth: '54%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />
                    <AdvancedImage cldImg={inventoryManagementMobile} style={{maxWidth: '22%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />             
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </div>
               
        </Row>
        : null }

        {radioValue === '2' ? 
            <Row >
                <div className="proj-info-cont justify align">
                    <h3>Resume Builder</h3>
                    <Button className="offcanvas-desktop-butn" variant="outline-light" onClick={handleShow}>
                        <i class="fa-solid fa-circle-info"></i>
                    </Button>
                </div>
                <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Resume Builder</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Row className="card-about-row">
                            <span className="bold justify">About</span>
                        </Row>
                        <Row >
                            <p >A React application that allows a user to enter and change information on their resume  </p>
                        </Row>
                        <Row className="card-made-with-row">
                            <span className="bold justify">Made With</span>
                        </Row>
                        <Row>
                            <Col>
                                <div className="skill">
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML5</p>  
                                </div>
                            </Col>
                            <Col>
                                <div className="skill">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS3</p>   
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="skill">
                                    <i className="fa-brands fa-square-js"></i>
                                    <p>JavaScript</p>   
                                </div>
                            </Col>
                            <Col>
                                <div className="skill">
                                    <i className="fa-brands fa-react"></i>
                                    <p>React</p>  
                                </div>
                            </Col>
                        </Row>                  
                    </Offcanvas.Body>
                </Offcanvas>
                <div className="desktop-proj-img-row">
                    <AdvancedImage cldImg={resumeDesktop} style={{maxWidth: '54%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />
                    <AdvancedImage cldImg={resumeMobile} style={{maxWidth: '22%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />          
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </Row>
        : null}

        {radioValue === '3' ? 
            <Row >
                <div className="proj-info-cont justify align">
                    <h3>Calculator App</h3>
                    <Button className="offcanvas-desktop-butn" variant="outline-light" onClick={handleShow}>
                        <i class="fa-solid fa-circle-info"></i>
                    </Button>
                </div>
                <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Calculator Application</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Row className="card-about-row">
                                <span className="bold justify">About</span>
                            </Row>
                            <Row >
                                <p >A simple calculator application made with pure JavaScript  </p>
                            </Row>
                            <Row className="card-made-with-row">
                                <span className="bold justify">Made With</span>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-html5"></i>
                                        <p>HTML5</p>  
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-css3-alt"></i>
                                        <p>CSS3</p>   
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-square-js"></i>
                                        <p>JavaScript</p>   
                                    </div>
                                </Col>
                                <Col>
                                    
                                </Col>
                            </Row> 
                        </Offcanvas.Body>
                </Offcanvas>
                <div className="desktop-proj-img-row">
                    <AdvancedImage cldImg={calculatorDesktop} style={{maxWidth: '54%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />
                    <AdvancedImage cldImg={calculatorMobile} style={{maxWidth: '22%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />       
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </Row>
        : null}

        {radioValue === '4' ? 
            <Row >
                <div className="proj-info-cont justify align">
                    <h3>Weather Forecast App</h3>
                    <Button className="offcanvas-desktop-butn" variant="outline-light" onClick={handleShow}>
                        <i class="fa-solid fa-circle-info"></i>
                    </Button>
                </div>
                <Offcanvas className="offcanvas-desktop" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Weather Forecast Application</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Row className="card-about-row">
                                <span className="bold justify">About</span>
                            </Row>
                            <Row >
                                <p > A weather forecasting Application that makes use of OpenWeather API to provide users with weather data based on searched locations  </p>
                            </Row>
                            <Row className="card-made-with-row">
                                <span className="bold justify">Made With</span>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-html5"></i>
                                        <p>HTML5</p>  
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-css3-alt"></i>
                                        <p>CSS3</p>   
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-square-js"></i>
                                        <p>JavaScript</p>   
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill">
                                        <i className="fa-brands fa-bootstrap"></i>
                                        <p>Bootstrap</p>  
                                    </div>
                                </Col>
                            </Row> 
                    </Offcanvas.Body>
                </Offcanvas>
                <div className="desktop-proj-img-row">
                    <AdvancedImage cldImg={weatherDesktop} style={{maxWidth: '54%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />
                    <AdvancedImage cldImg={weatherMobile} style={{maxWidth: '22%'}} plugins={[responsive({steps: 100}), placeholder({mode: 'blur'})]} />             
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </Row>
        : null }
    </Container>
    )
}