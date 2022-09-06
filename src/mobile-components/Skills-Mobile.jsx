import React, { Container, Row } from "react-bootstrap";
import mongoIcon from "../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png";

export default function SkillsMobile() {
  return (
    <Container id="skills-mob" fluid className="skills-mobile">
      <Row>
        <h2 className="justify">My Skills</h2>
        <div className="mobile-skills-grid">
          <div className="mobile-skill">
            <p className="fa-brands fa-html5" />
            <p>HTML5</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-css3-alt" />
            <p>CSS3</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-square-js" />
            <p>JavaScript</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-react" />
            <p>React</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-node-js" />
            <p>node.js</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-python" />
            <p>Python</p>
          </div>
          <div className="mobile-skill">
            <p className="fa-brands fa-java" />
            <p>Java</p>
          </div>
          <div className="mobile-skill">
            <p src={mongoIcon} />
            <p>MongoDB</p>
          </div>
        </div>
      </Row>
    </Container>
  );
}
