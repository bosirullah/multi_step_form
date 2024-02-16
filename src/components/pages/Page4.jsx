import React, { useState } from "react";
import Page2 from "./Page2";

const Page4 = ({onPrev, onNext, onPage2, allPagesData}) =>{
    const handleAnchorClick = () =>{
        onPage2();
    }

    // console.log("all data = ",allPagesData.page3.total);

    const totalCost = () =>{
        let total = allPagesData.page2.price;
        allPagesData.page3.map((data) =>(
            total += data.price
        ))

        return total
    }

    const handleNextSubmit = (e) =>{
        e.preventDefault();
        onNext();
    }

    const handlePrevSubmit = (e) =>{
        e.preventDefault();
        onPrev();
    }

    return(
        <>
            <div className="page4 page">
                <h2>Finishing up</h2>
                <p style={{marginBottom: "10px"}}>Double-check everything looks OK before confirming. </p>

                <div className="finalCheck">
                    <div className="plan">
                        <div className="plan-content">
                            <h4>{`${allPagesData.page2.plan}(${allPagesData.page2.paymentMethod})`}</h4>
                            <a href="#" onClick={handleAnchorClick} style={{textDecoration: "underline"}}>change</a>
                        </div>
                        <span>{`$${allPagesData.page2.price}/mo`}</span>
                    </div>
                    
                    <hr /> 

                    {
                        allPagesData.page3.map((data,index) =>(
                            <div className="service" key={index}>
                                <p>{data.service}</p>
                                <span>{`+$${data.price}/mo`}</span>
                            </div>
                            
                        ))
                    }
                </div>

                <div className="total">
                    <p>Total(per month)</p>
                    <span>{`+$${totalCost()}/mo`}</span>
                </div>

                <div className="pageBtns">
                    <button className='prevBtn' onClick={handlePrevSubmit}>Go Back</button>
                    <button type='submit' className='nextBtn4' onClick={handleNextSubmit}>Confirm</button>
                </div>
            </div>
        </>
    )
}

export default Page4;