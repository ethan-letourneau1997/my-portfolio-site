import { Container, Row, Button } from "react-bootstrap";

export default function Homepage () {

    return (
        <Container className="desktop-home-container">
            <Row>
                <h1 className="justify">Ethan Letourneau</h1>
            </Row>
            <Row>
                <h2 className="justify">Frontend Developer</h2>
            </Row>   

            <Row className="page-butn-row">
                <Button className="go-to-butn" href="#About" variant="outline-light" size="lg">Who am I?</Button>
            </Row>
        </Container>
    )
}