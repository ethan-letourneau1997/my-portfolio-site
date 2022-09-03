import { Container, Row, Button } from "react-bootstrap";

export default function AboutMobile() {

    return(
        <Container id="about-mob" fluid className="about-me-mobile-container">
            <Row className="justify align">
                <h2 className="justify">About Me</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore nemo debitis aut facere repellendus magnam cupiditate voluptas. 
                    Magnam nisi dolores quo, ipsa quisquam tempora corrupti natus, ex in quam possimus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore nemo debitis aut facere repellendus magnam cupiditate voluptas. 
                    Magnam nisi dolores quo, ipsa quisquam tempora corrupti natus, ex in quam possimus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore nemo debitis aut facere repellendus magnam cupiditate voluptas. 
                    Magnam neisi dolores quo, ipsa quisquam tempora corrupti natus, ex in quam possimus.
                </p>
            </Row>
            <Row className="mob-page-butn-row">
                <Button className="go-to-butn-mob" href="#skills-mob" variant="outline-light" size="lg">What can I do?</Button>
            </Row>
        </Container>
    ) 
}