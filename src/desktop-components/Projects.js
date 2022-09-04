import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import { Overlay } from 'react-bootstrap'
import { Tooltip } from 'react-bootstrap'
import { useRef } from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { responsive } from '@cloudinary/react'
import ipadInventoryManagement from '../project-img/desktop-inventory-management.png'
import iphoneInventoryManagement from '../project-img/iphone-inventory-management.png'
import ipadResumeBuilder from '../project-img/desktop-resume.png'
import iphoneResumeBuilder from '../project-img/iphone-resume.png'
import ipadCalculator from '../project-img/desktop-calc.png'
import iphoneCalculator from '../project-img/calc-mobile.png'




export default function Projects () {
    
    const [activeTab, setActiveTab] = useState('tab1')

    const switchTab1 = () => {
        setActiveTab('tab1')
        console.log(activeTab)
    }

    const switchTab2 = () => {
        setActiveTab('tab2')
        console.log(activeTab)
    }

    const switchTab3 = () => {
        setActiveTab('tab3')
        console.log(activeTab)
    }

    const switchTab4 = () => {
        setActiveTab('tab4')
        console.log(activeTab)
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Coming Soon
        </Tooltip>
    );

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'eletourneau'
        }
      });
    const inventoryManagementMobile = cld.image('iphone-inventoyr-management_qwy4g3');
    const inventoryManagementDesktop = cld.image('desktop-inventory-management_zwu4o0');
    const resumeMobile = cld.image('iphone-resume_cu6owm');
    const resumeDesktop = cld.image('desktop-resume_fqycwx');
    const calculatorMobile = cld.image('calc-mobile_y1rtmd');
    const calculatorDesktop = cld.image('desktop-calc_p69q6e');


    return (
    <div>

        {activeTab === 'tab1' ? 
            <div className="container desktop-projects-container">

                <div className="row desktop-proj-tab-row">
                    <div className="active-tab justify" id="tab1" onClick={switchTab1}>Inventory Management</div>
                    <div className="tab justify" id="tab2" onClick={switchTab2}>Resume Builder</div>
                    <div className="tab justify" id="tab3" onClick={switchTab3}>Calculator</div>
                    <div className="tab justify" id="tab4" onClick={switchTab4}>Weather Forecast</div>
                </div>
                <div className="row desktop-proj-img-row justify">
                    <AdvancedImage cldImg={inventoryManagementDesktop} style={{maxWidth: '57%'}} plugins={[responsive({steps: 200})]} />
                    <AdvancedImage cldImg={inventoryManagementMobile} style={{maxWidth: '25%'}} plugins={[responsive({steps: 200})]} />             
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </div>
        : <div></div>}

        {activeTab === 'tab2' ? 
            <div className="container desktop-projects-container">
                <div className="row desktop-proj-tab-row">
                    <div className="tab justify" id="tab1" onClick={switchTab1}>Inventory Management</div>
                    <div className="active-tab justify" id="tab2" onClick={switchTab2}>Resume Builder</div>
                    <div className="tab justify" id="tab3" onClick={switchTab3}>Calculator</div>
                    <div className="tab justify" id="tab4" onClick={switchTab4}>Weather Forecast</div>
                </div>
                <div className="row desktop-proj-img-row justify">
                    <AdvancedImage cldImg={resumeDesktop} style={{maxWidth: '57%'}} plugins={[responsive({steps: 200})]} />
                    <AdvancedImage cldImg={resumeMobile} style={{maxWidth: '25%'}} plugins={[responsive({steps: 200})]} />
                </div>
                <div className='row desktop-proj-butn-row'>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}>
                        <Button variant="outline-light" size='lg' className='demo-butn'>Demo</Button>
                </OverlayTrigger>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </div>
                  
        : <div></div>}

        {activeTab === 'tab3' ? 
            <div className="container desktop-projects-container">
                <div className="row desktop-proj-tab-row">
                    <div className="tab justify" id="tab1" onClick={switchTab1}>Inventory Management</div>
                    <div className="tab justify" id="tab2" onClick={switchTab2}>Resume Builder</div>
                    <div className="active-tab justify" id="tab3" onClick={switchTab3}>Calculator</div>
                    <div className="tab justify" id="tab4" onClick={switchTab4}>Weather Forecast</div>
                </div>
                <div className="row desktop-proj-img-row justify">
                    <AdvancedImage cldImg={calculatorDesktop} style={{maxWidth: '57%'}} plugins={[responsive({steps: 200})]} />
                    <AdvancedImage cldImg={calculatorMobile} style={{maxWidth: '25%'}} plugins={[responsive({steps: 200})]} />
                </div>
                <div className='row desktop-proj-butn-row'>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                            <Button variant="outline-light" size='lg' className='demo-butn'>Demo</Button>
                    </OverlayTrigger>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </div>
        : <div></div>}

        {activeTab === 'tab4' ? 
            <div className="container desktop-projects-container">
                <div className="row desktop-proj-tab-row">
                    <div className="tab justify" id="tab1" onClick={switchTab1}>Inventory Management</div>
                    <div className="tab justify" id="tab2" onClick={switchTab2}>Resume Builder</div>
                    <div className="tab justify" id="tab3" onClick={switchTab3}>Calculator</div>
                    <div className="active-tab justify" id="tab4" onClick={switchTab4}>Weather Forecast</div>
                </div>
                <div className="row desktop-proj-img-row justify">
                    <img className="ipad-img" id="ipad-img" src={ipadInventoryManagement} alt=""></img>
                    <img className="iphone-img" id="iphone-img" src={iphoneInventoryManagement} alt=""></img>
                </div>
                <div className='row desktop-proj-butn-row'>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}>
                        <Button variant="outline-light" size='lg' className='demo-butn'>Demo</Button>
                </OverlayTrigger>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </div>
        : <div></div>}
    </div>
    )
}