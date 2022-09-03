import mongoIcon from '../icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-80.png'
import webpackIcon from '../icons/icons8-webpack.svg'

export default function Skills () {

    return (
        <div className="container skills-container">
            
            <div className='skills-header-container'>
                <div className="row">
                    <h2 className="justify">My Skills</h2>
                </div>
                <div className="row justify">
                    <div className="desktop-skills-grid">
                        <div className="skill">
                            <i className="fa-brands fa-html5"></i>
                            <p>HTML5</p>  
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>CSS3</p>   
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-square-js"></i>
                            <p>JavaScript</p>   
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-react"></i>
                            <p>React</p>  
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-bootstrap"></i>
                            <p>Bootstrap</p>  
                        </div>
                        <div className="skill">
                            <img src={webpackIcon}></img>
                            <p>Webpack</p> 
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-node-js"></i>
                            <p>node.js</p> 
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-python"></i>
                            <p>Python</p>
                        </div>
                        <div className="skill">
                            <i className="fa-brands fa-java"></i>
                            <p>Java</p> 
                        </div>
                        <div className="skill">
                            <img src={mongoIcon}></img>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row page-butn-row">
                    <a href="#Projects" className="go-to-butn btn btn-lg outline-light">What have I made?</a>
            </div> 
        </div>
    )
}