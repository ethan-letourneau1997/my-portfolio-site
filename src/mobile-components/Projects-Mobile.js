import { Container, Row, Button, Carousel } from "react-bootstrap";
import { useState } from 'react'
import ipadInventoryManagement from '../project-img/desktop-inventory-management.png'
import iphoneInventoryManagement from '../project-img/iphone-inventory-management.png'
import ipadResumeBuilder from '../project-img/desktop-resume.png'
import iphoneResumeBuilder from '../project-img/iphone-resume.png'
import ipadCalculator from '../project-img/desktop-calc.png'
import iphoneCalculator from '../project-img/calc-mobile.png'

export default function ProjectsMobile() {

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <Carousel  className="carousel" interval={1000000000} data-bs-interval={false} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carousel-item">
                <img
                    className="carousel-iphone d-block w-100"
                    src={iphoneInventoryManagement}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Inventory Management App</h3>
                    <div className="demo-code-butn-div">
                        <Button href="#" variant="outline-light" >Demo</Button>
                        <Button href="#" variant="outline-light" >Code</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    className="carousel-iphone d-block w-100"
                    src={iphoneResumeBuilder}
                    alt="Second slide"
                />
    
                <Carousel.Caption>
                    <h3>Resume Buil</h3>
                    <div className="demo-code-butn-div">
                        <Button href="#" variant="outline-light" >Demo</Button>
                        <Button href="#" variant="outline-light" >Code</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img
                    className="carousel-iphone d-block w-100"
                    src={iphoneCalculator}
                    alt="Third slide"
                />
    
                <Carousel.Caption>
                    <h3>Calculator App</h3>
                    <div className="demo-code-butn-div">
                        <Button href="#" variant="outline-light" >Demo</Button>
                        <Button href="#" variant="outline-light" >Code</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    ) 
}