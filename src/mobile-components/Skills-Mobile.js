import { Container, Row, Button } from "react-bootstrap";
import mongoIcon from '../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png'
import webpackIcon from '../icons/icons8-webpack.svg'

export default function SkillsMobile() {

    return(
        <Container id="skills-mob" fluid className="skills-mobile">
            <Row >
                <h2 className="justify">My Skills</h2>
                <div className="mobile-skills-grid">
                    <div className="mobile-skill">
                        <i className="fa-brands fa-html5"></i>
                        <p>HTML5</p>  
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-css3-alt"></i>
                        <p>CSS3</p>   
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-square-js"></i>
                        <p>JavaScript</p>   
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-react"></i>
                        <p>React</p>  
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-bootstrap"></i>
                        <p>Bootstrap</p>  
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-node-js"></i>
                        <p>node.js</p> 
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-python"></i>
                        <p>Python</p>
                    </div>
                    <div className="mobile-skill">
                        <i className="fa-brands fa-java"></i>
                        <p>Java</p> 
                    </div>
                    <div className="mobile-skill">
                        <img src={mongoIcon}></img>
                        <p>MongoDB</p>
                    </div>
                    </div>
            </Row>
        </Container>
    ) 
}