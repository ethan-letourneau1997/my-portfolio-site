import { Container, Row, Button, Carousel, Col, Offcanvas, CloseButton } from "react-bootstrap";
import { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ipadInventoryManagement from '../project-img/desktop-inventory-management.png'
import iphoneInventoryManagement from '../project-img/iphone-inventory-management.png'
import ipadResumeBuilder from '../project-img/desktop-resume.png'
import iphoneResumeBuilder from '../project-img/iphone-resume.png'
import ipadCalculator from '../project-img/desktop-calc.png'
import iphoneCalculator from '../project-img/calc-mobile.png'
import { Cloudinary } from '@cloudinary/url-gen'
import { fill, limitFit, pad } from '@cloudinary/url-gen/actions/resize'
import { responsive, placeholder, AdvancedImage } from '@cloudinary/react'
import mongoIcon from '../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png'

export default function MobileProjects () {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const [checked, setChecked] = useState(false);
const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Inventory Management', value: '1' },
    { name: 'Resume Builder', value: '2' },
    { name: 'Calculator App', value: '3' },
    { name: 'Weather Forecast', value: '4' }
  ];

    const [mobileChecked, setMobileChecked] = useState(false);
    const [mobileRadioValue, setMobileRadioValue] = useState('1');

  const mobileRadios = [
    { name: 'Mobile', value: '1' },
    { name: 'Desktop', value: '2' },
  ];


    const [activeTab, setActiveTab] = useState('tab1')

    const switchTab1 = () => {
        setActiveTab('tab1')
    }

    const switchTab2 = () => {
        setActiveTab('tab2')
    }

    const switchTab3 = () => {
        setActiveTab('tab3')
    }

    const switchTab4 = () => {
        setActiveTab('tab4')
    }


    const [mobileDisplay, setMobileDisplay] = useState(true)

    const switchToMobileDisplay = () => {
        setMobileDisplay('mobile')
    }

    const switchToDesktopDisplay = () => {
        setMobileDisplay('desktop')
    }

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



    return (
        <Container id="projects-mob" className="mob-projects">
            <Row className="switch-proj-butn-row">
                <Button className="switch-proj-butn" variant="outline-light thick-butn offcanvas-butn" onClick={handleShow}>
                    Switch Project
                </Button>
            </Row>
            <Row>
                <h2 className="justify">My Projects</h2>
            </Row>
            
            
            

            <Offcanvas className="offcanvas-mobile" placement="bottom" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title>Display Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>   
                    {activeTab === 'tab1' ? 
                    <ButtonGroup aria-label="Basic example">
                        <Button  onClick={switchTab1} className="mob-proj-select mob-proj-active" variant="outline-light">Inventory Management</Button>
                        <Button  onClick={switchTab2} className="mob-proj-select" variant="outline-light">Resume Builder</Button>
                        <Button  onClick={switchTab3} className="mob-proj-select" variant="outline-light">Calculator App</Button>
                        <Button  onClick={switchTab4} className="mob-proj-select" variant="outline-light">Weather Forecast</Button>
                    </ButtonGroup> : null}
                    {activeTab === 'tab2' ? 
                    <ButtonGroup aria-label="Basic example">
                        <Button  onClick={switchTab1} className="mob-proj-select" variant="outline-light">Inventory Management</Button>
                        <Button  onClick={switchTab2} className="mob-proj-select mob-proj-active" variant="outline-light">Resume Builder</Button>
                        <Button  onClick={switchTab3} className="mob-proj-select" variant="outline-light">Calculator App</Button>
                        <Button  onClick={switchTab4} className="mob-proj-select" variant="outline-light">Weather Forecast</Button>
                    </ButtonGroup> : null}
                    {activeTab === 'tab3' ? 
                    <ButtonGroup aria-label="Basic example">
                        <Button  onClick={switchTab1} className="mob-proj-select" variant="outline-light">Inventory Management</Button>
                        <Button  onClick={switchTab2} className="mob-proj-select" variant="outline-light">Resume Builder</Button>
                        <Button  onClick={switchTab3} className="mob-proj-select mob-proj-active" variant="outline-light">Calculator App</Button>
                        <Button  onClick={switchTab4} className="mob-proj-select" variant="outline-light">Weather Forecast</Button>
                    </ButtonGroup> : null}
                    {activeTab === 'tab4' ? 
                    <ButtonGroup aria-label="Basic example">
                        <Button  onClick={switchTab1} className="mob-proj-select" variant="outline-light">Inventory Management</Button>
                        <Button  onClick={switchTab2} className="mob-proj-select" variant="outline-light">Resume Builder</Button>
                        <Button  onClick={switchTab3} className="mob-proj-select" variant="outline-light">Calculator App</Button>
                        <Button  onClick={switchTab4} className="mob-proj-select mob-proj-active" variant="outline-light">Weather Forecast</Button>
                    </ButtonGroup> : null}

               
                    <ButtonGroup className="mob-butn-group">
                        {mobileRadios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`mobileRadio-${idx}`}
                            type="radio"
                            variant="outline-light"
                            name="mobileRadio"
                            className="mobile-radio"
                            value={radio.value}
                            checked={mobileRadioValue === radio.value}
                            onChange={(e) => setMobileRadioValue(e.currentTarget.value)}>
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Offcanvas.Body>
            </Offcanvas>
            
            {activeTab === 'tab1' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={inventoryManagementMobile} style={{maxWidth: '60%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}
            {activeTab === 'tab1' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={inventoryManagementDesktop} style={{maxWidth: '100%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}

            {activeTab === 'tab2' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Resume Builder</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={resumeMobile} style={{maxWidth: '60%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}
            {activeTab === 'tab2' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Resume Builder</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={resumeDesktop} style={{maxWidth: '100%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}

            {activeTab === 'tab3' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Calculator</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={calculatorMobile} style={{maxWidth: '60%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}
            {activeTab === 'tab3' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Calculator</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={calculatorDesktop} style={{maxWidth: '100%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}

            {activeTab === 'tab4' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={weatherMobile} style={{maxWidth: '60%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}
            {activeTab === 'tab4' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <AdvancedImage cldImg={weatherDesktop} style={{maxWidth: '100%'}} plugins={[responsive({steps: 200}), placeholder({mode: 'blur'})]} />
                    </Row>
                </Row> : null}

                
            
            {activeTab === 'tab1' ? 
                <Card className="mob-card" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="justify card-title"></Card.Title>
                        <Card.Subtitle className="mobile-header bold justify">About</Card.Subtitle>
                        <Card.Text>
                            An inventory management application for the fictional company 
                            'Great Outdoors'. It is a CRUD (create, read, update delete) application 
                            that stores records in MongoDB. Feel free to play around by adding or editing items
                        </Card.Text>
                        <Card.Subtitle className="mobile-header bold justify">Skills Used</Card.Subtitle>
                        <Card.Text>
                        <Row>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML5</p>  
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS3</p>   
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-square-js"></i>
                                    <p>JavaScript</p>   
                                </div>
                            </Col>
                        </Row>
                        <Row> 
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-bootstrap"></i>
                                    <p>Bootstrap</p>  
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-node-js"></i>
                                    <p>node.js</p> 
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <img src={mongoIcon}></img>
                                    <p>MongoDB</p>
                                </div>
                            </Col>
                        </Row>
                        </Card.Text>
                        <Row className="mob-proj-butn-row">
                            <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                            <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
                        </Row>
                    </Card.Body>
                </Card> : null }
            {activeTab === 'tab2' ? 
                <Card className="mob-card" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="justify card-title"></Card.Title>
                        <Card.Subtitle className="mobile-header bold justify">About</Card.Subtitle>
                        <Card.Text>
                        A React application that allows a user to enter and change information on their resume 
                        </Card.Text>
                        <Card.Subtitle className="mobile-header bold justify">Skills Used</Card.Subtitle>
                        <Card.Text>
                        <Row>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML5</p>  
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS3</p>   
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-square-js"></i>
                                    <p>JavaScript</p>   
                                </div>
                            </Col>
                        </Row>
                        <Row> 
                        <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-react"></i>
                                    <p>React</p>  
                                </div>
                            </Col>
                            <Col>
                  
                            </Col>
                            <Col>
                 
                            </Col>
                        </Row>
                        </Card.Text>
                        <Row className="mob-proj-butn-row">
                            <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                            <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
                        </Row>
                    </Card.Body>
                </Card> : null }

            {activeTab === 'tab3' ? 
                <Card className="mob-card" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="justify card-title"></Card.Title>
                        <Card.Subtitle className="mobile-header bold justify">About</Card.Subtitle>
                        <Card.Text>
                        A simple calculator application made with pure JavaScript 
                        </Card.Text>
                        <Card.Subtitle className="mobile-header bold justify">Skills Used</Card.Subtitle>
                        <Card.Text>
                        <Row>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML5</p>  
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS3</p>   
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-square-js"></i>
                                    <p>JavaScript</p>   
                                </div>
                            </Col>
                        </Row>
                        </Card.Text>
                        <Row className="mob-proj-butn-row">
                            <Button href="https://calculator-ia6lr48wx-ethan-letourneau1997.vercel.app/" variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                            <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
                        </Row>
                    </Card.Body>
                </Card> : null }

            {activeTab === 'tab4' ? 
                <Card className="mob-card" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="justify card-title"></Card.Title>
                        <Card.Subtitle className="mobile-header bold justify">About</Card.Subtitle>
                        <Card.Text>
                        A weather forecasting Application that makes use of OpenWeather API to provide users with weather data based on searched locations 
                        </Card.Text>
                        <Card.Subtitle className="mobile-header bold justify">Skills Used</Card.Subtitle>
                        <Card.Text>
                        <Row>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML5</p>  
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS3</p>   
                                </div>
                            </Col>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-square-js"></i>
                                    <p>JavaScript</p>   
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mobile-skill">
                                    <i className="fa-brands fa-bootstrap"></i>
                                    <p>Bootstrap</p>  
                                </div>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                        </Row> 
                        </Card.Text>
                        <Row className="mob-proj-butn-row">
                            <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                            <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
                        </Row>
                    </Card.Body>
                </Card> : null }
           

        
            {radioValue === '3' ? 
            <Row className="mob-proj-butn-row">
                <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
            </Row>
            : null}
            {radioValue === '4' ? 
            <Row className="mob-proj-butn-row">
                <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
            </Row>
            : null}
        
            
        </Container>
    )
}