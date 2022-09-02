import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './img/test-background.jpg'
import ReactFullpage from '@fullpage/react-fullpage';
import Homepage from './Homepage';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './index.css';
import './multiple-circles.css';


class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["Home", "About", "Skills", "Projects"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    showActiveTooltip
    licenseKey={'KRA6H-Q2PJJ-6S9J9-ICUYH-NUBKL'}
    scrollingSpeed={1500}
    css3={false}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <div className='section fp-section' style={{ backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundAttachment:'fixed' }}>
            <Homepage />
          </div>
          <div className='section fp-section' style={{ backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundAttachment:'fixed' }}>
            <About />
          </div>
          <div className='section fp-section' style={{ backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundAttachment:'fixed' }}>
            <Skills />
          </div>
          <div className='section fp-section' style={{ backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundAttachment:'fixed' }}>
            <Projects />
          </div>
        </div>
      );
    }}
  />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FullpageWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

