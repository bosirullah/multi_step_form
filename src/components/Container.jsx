import React,{ useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Sidebar from './Sidebar';
import ThankYou from './pages/ThankYou';

const Container = () =>{
    const [activeStep, setActiveStep] = useState(1);
    const [page1Data, setPage1Data] = useState(null);
    const [page2Data, setPage2Data] = useState(null);
    const [page3Data, setPage3Data] = useState(null);
    const [allPagesData, setAllPagesData] = useState(null);

    const handleStepChange = (newStep) => {
        setActiveStep(newStep);
    };

    const handlePage1Data = (pageData) =>{
        // console.log(pageData)
        setPage1Data(pageData)
        setAllPagesData({
            page1: pageData
        })
    }
    
    const handlePage2Data = (pageData) =>{
        // console.log(pageData)
        setPage2Data(pageData);

        setAllPagesData({
            ...allPagesData,
            page2: pageData,
        })
    }
    
    const handlePage3Data = (pageData) =>{
        // console.log(pageData)
        setPage3Data(pageData)

        setAllPagesData({
            ...allPagesData,
            page3: pageData,
        })
    }


    

    return(
        <div className='container'>
            <Sidebar activeStep={activeStep} />
            {activeStep === 1 && <Page1 onNext= {() => handleStepChange(2)} pageData={handlePage1Data}/>}
            {activeStep === 2 && <Page2 onNext= {() => handleStepChange(3)} onPrev= {() => handleStepChange(1)} pageData={handlePage2Data}/>}
            {activeStep === 3 && <Page3 onNext= {() => handleStepChange(4)} onPrev= {() => handleStepChange(2)} pageData={handlePage3Data} />}
            {activeStep === 4 && <Page4 onPrev= {() => handleStepChange(3)} onNext= {() => handleStepChange(5)} onPage2={() => handleStepChange(2)} allPagesData={allPagesData}/>}
            {activeStep === 5 && <ThankYou onPrev= {() => handleStepChange(3)} onPage2={() => handleStepChange(2)} allPagesData={allPagesData}/>}
            <div className="pageBtn"></div>
        </div>
    )
} 

export default Container;

