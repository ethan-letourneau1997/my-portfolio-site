/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactFullpage from "@fullpage/react-fullpage";
import background from "./img/test-background.jpg";
import Homepage from "./desktop-components/Homepage";
import About from "./desktop-components/About";
import Skills from "./desktop-components/Skills";
import Projects from "./desktop-components/Projects";
import MobileNav from "./mobile-components/MobileNav";
import HomepageMobile from "./mobile-components/HomepageMobile";
import AboutMobile from "./mobile-components/About-Mobile";
import SkillsMobile from "./mobile-components/Skills-Mobile";
import MobileProjects from "./mobile-components/Mobile-Projects";
// import Redux from "./desktop-components/Redux";
import ReduxV2 from "./desktop-components/ReduxV2";
// import Wireframe from "./desktop-components/Wireframe";
import "./index.css";
import "./mobile.css";
import "./multiple-circles.css";
import Projects3 from "./desktop-components/project-button-row/Projects3";

// eslint-disable-next-line react/prefer-stateless-function, no-unused-vars
class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = [
  "Home",
  "About",
  "Skills",
  "Projects_I",
  "Projects_II",
  "Projects_III",
];

function FullpageWrapper() {
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      autoScrolling
      responsiveWidth={768}
      // showActiveTooltip
      licenseKey="KRA6H-Q2PJJ-6S9J9-ICUYH-NUBKL"
      normalScrollElements="#nasa-img-1,#nasa-img-2, .img-row, nasa-img, .image-div, .device, .modal-header, .modal-body"
      css3={false}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

        return (
          <div>
            <div
              className="section fp-section homepage-section"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
              }}
            >
              <Homepage />
            </div>
            <div
              className="section fp-section"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
              }}
            >
              <About />
            </div>
            <div
              className="section fp-section"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
              }}
            >
              <Skills />
            </div>
            <div
              className="section fp-section"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
              }}
            >
              <Projects />
            </div>
            <div
              className="section fp-section"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
              }}
            >
              <ReduxV2 />
            </div>
            <div
              className="section fp-section"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
              }}
            >
              <Projects3 />
            </div>
          </div>
        );
      }}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="d-none d-md-block">
      <FullpageWrapper />
    </div>
    <div className="d-md-none mobile-display">
      <MobileNav />
      <HomepageMobile />
      <AboutMobile />
      <SkillsMobile />
      <MobileProjects />
    </div>
  </React.StrictMode>
);
