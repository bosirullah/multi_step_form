import React,{ useState } from 'react';
import '../App.css'

const Sidebar = ({activeStep}) => {
    return(
        <div className='leftContainer'>
            <div className='leftContainerContent'>
                <div className='content'>
                    <div className={`numbering ${activeStep === 1 ? 'numberingNew' : '' }`} ><p>1</p></div>
                    <div className='subContent'>
                        <p>STEP 1</p>
                        <h4>YOUR INFO</h4>
                    </div>
                </div>

                <div className='content'>
                    <div className={`numbering ${activeStep === 2 ? 'numberingNew' : '' }`}><p>2</p></div>
                    <div className='subContent'>
                        <p>STEP 2</p>
                        <h4>SELECT PLAN</h4>
                    </div>
                </div>

                <div className='content'>
                    <div className={`numbering ${activeStep === 3 ? 'numberingNew' : '' }`}><p>3</p></div>
                    <div className='subContent'>
                        <p>STEP 3</p>
                        <h4>ADD-ONS</h4>
                    </div>
                </div>

                <div className='content'>
                    <div className={`numbering ${activeStep === 4 ? 'numberingNew' : '' }`}><p>4</p></div>
                    <div className='subContent'>
                        <p>STEP 4</p>
                        <h4>SUMMARY</h4>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;