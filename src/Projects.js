import { useState } from 'react'
import ipadInventoryManagement from './project-img/desktop-inventory-management.png'
import iphoneInventoryManagement from './project-img/iphone-inventory-management.png'
import ipadResumeBuilder from './project-img/desktop-resume.png'
import iphoneResumeBuilder from './project-img/iphone-resume.png'
import ipadCalculator from './project-img/desktop-calc.png'
import iphoneCalculator from './project-img/calc-mobile.png'



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
                    <img class="ipad-img" id="ipad-img" src={ipadInventoryManagement} alt=""></img>
                    <img class="iphone-img" id="iphone-img" src={iphoneInventoryManagement} alt=""></img>
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
                    <img class="ipad-img" id="ipad-img" src={ipadResumeBuilder} alt=""></img>
                    <img class="iphone-img" id="iphone-img" src={iphoneResumeBuilder} alt=""></img>
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
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
                    <img class="ipad-img" id="ipad-img" src={ipadCalculator} alt=""></img>
                    <img class="iphone-img" id="iphone-img" src={iphoneCalculator} alt=""></img>
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
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
                    <img class="ipad-img" id="ipad-img" src={ipadInventoryManagement} alt=""></img>
                    <img class="iphone-img" id="iphone-img" src={iphoneInventoryManagement} alt=""></img>
                </div>
                <div className='row desktop-proj-butn-row'>
                    <a className='btn btn-lg outline-light demo-butn'>Demo</a>
                    <a className='btn btn-lg outline-light code-butn'>Code</a>
                </div> 
            </div>
        : <div></div>}
    </div>
    )
}