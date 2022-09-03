import { Container, Row, Button, Carousel, Col, Offcanvas, CloseButton } from "react-bootstrap";
import { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ipadInventoryManagement from '../project-img/desktop-inventory-management.png'
import iphoneInventoryManagement from '../project-img/iphone-inventory-management.png'
import ipadResumeBuilder from '../project-img/desktop-resume.png'
import iphoneResumeBuilder from '../project-img/iphone-resume.png'
import ipadCalculator from '../project-img/desktop-calc.png'
import iphoneCalculator from '../project-img/calc-mobile.png'

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


    return (
        <Container id="projects-mob" className="mob-projects">
            <Row>
                <h2 className="justify">My Projects</h2>
            </Row>
            

            <Offcanvas placement="bottom" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title>Display Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="outline-light"
                            name="radio"
                            className="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}>
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
               
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
            
            {radioValue === '1' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <img className="mob-phone-img" src={iphoneInventoryManagement}></img>
                    </Row>
                </Row> : null}
            {radioValue === '1' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <img className="mob-desktop-img" src={ipadInventoryManagement}></img>
                    </Row>
                </Row> : null}

            {radioValue === '2' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Resume Builder</h3>
                    <Row className="mob-img-row">
                        <img className="mob-phone-img" src={iphoneResumeBuilder}></img>
                    </Row>
                </Row> : null}
            {radioValue === '2' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Resume Builder</h3>
                    <Row className="mob-img-row">
                        <img className="mob-desktop-img" src={ipadResumeBuilder}></img>
                    </Row>
                </Row> : null}

            {radioValue === '3' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Calculator</h3>
                    <Row className="mob-img-row">
                        <img className="mob-phone-img" src={iphoneCalculator}></img>
                    </Row>
                </Row> : null}
            {radioValue === '3' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Calculator</h3>
                    <Row className="mob-img-row">
                        <img className="mob-desktop-img" src={ipadCalculator}></img>
                    </Row>
                </Row> : null}

            {radioValue === '4' && mobileRadioValue === '1' ? 
                <Row >
                    <h3 className="justify">Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <img className="mob-phone-img" src={iphoneInventoryManagement}></img>
                    </Row>
                </Row> : null}
            {radioValue === '4' && mobileRadioValue === '2' ? 
                <Row >
                    <h3 className="justify" >Inventory Management Site</h3>
                    <Row className="mob-img-row">
                        <img className="mob-desktop-img" src={ipadInventoryManagement}></img>
                    </Row>
                </Row> : null}

           

            {radioValue === '1' ? 
            <Row className="mob-proj-butn-row">
                <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
            </Row>
            : null}
            {radioValue === '2' ? 
            <Row className="mob-proj-butn-row">
                <Button variant="outline-light" className="mob-proj-butn mob-demo-butn">Demo</Button>
                <Button variant="outline-light" className="mob-proj-butn mob-code-butn">Code</Button>
            </Row>
            : null}
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

            
<Button variant="light thick-butn offcanvas-butn" onClick={handleShow}>
                See Other Projects
            </Button>
            
        </Container>
    )
}