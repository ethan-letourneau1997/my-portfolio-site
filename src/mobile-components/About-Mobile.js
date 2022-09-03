import { Container, Row, Button } from "react-bootstrap";

export default function AboutMobile() {

    return(
        <Container id="about-mob" fluid className="about-me-mobile-container">
            <Row className="justify align">
                <h2 className="justify">About Me</h2>
                <p>I am a self taught web developer with a Master's Degree in Information Technology.
                </p>
            </Row>
        </Container>
    ) 
}