import React,{ useEffect, useState } from 'react';  


const Page2 = ({onNext, onPrev, pageData}) =>{
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleNextSubmit = (e) =>{
        e.preventDefault();
        
        pageData(selectedPlan);

        // console.log(selectedPlan)
        onNext();
    }

    const handlePrevSubmit = (e) =>{
        e.preventDefault();
        onPrev();
    }

    const handleToggle = () => {
        setIsChecked(!isChecked);;
    };

    const handleOptionClick = (plan, price, option) =>{
        setSelectedPlan({
            plan: plan,
            price: isChecked ? price * 10 : price,
            paymentMethod: isChecked ? 'Yearly' : 'Monthly'
        })

        const selectOption  = document.querySelector(`.${option}`);

        const prevSelectedOptions = document.querySelectorAll('.option');
        // console.log(prevSelectedOptions)
        prevSelectedOptions.forEach((prevSelectedOption) =>{
            prevSelectedOption.style.backgroundColor = '';
            prevSelectedOption.style.borderColor = '';
        })

        // console.log(selectOption)
        selectOption.style.backgroundColor = 'hsl(217, 100%, 97%)';
        selectOption.style.borderColor = 'hsl(243, 47%, 48%)';

    }

    useEffect(() =>{
        const monthlyLabel = document.querySelector('.monthly');
        const yearlyLabel = document.querySelector('.yearly');
        // console.log(isChecked)

        if (isChecked === false) {
            yearlyLabel.style.color = ''; // Reset color if unchecked
            yearlyLabel.style.fontWeight = ''; // Reset font weight if unchecked
            monthlyLabel.style.color = 'hsl(213, 96%, 18%)'; 
            monthlyLabel.style.fontWeight = '700'; 
        } else {
            yearlyLabel.style.color = 'hsl(213, 96%, 18%)'; 
            yearlyLabel.style.fontWeight = '700';
            monthlyLabel.style.color = 'hsl(231, 11%, 63%)'; 
            monthlyLabel.style.fontWeight = '400'; 
        }

    },[isChecked])


    return(
        <div className='page2 page'>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="options">
                <div className="option1 option" onClick={() => handleOptionClick('Arcade', 9, 'option1')} >
                    <img src="assets/images/icon-arcade.svg" alt="" />
                    <div className="option-text">
                        <h4 style={{color: 'hsl(213, 96%, 18%)'}}>Arcade</h4>
                        {isChecked ? (
                            <>
                                <p>$90/mo</p> 
                                <span style={{color: 'hsl(213, 96%, 18%)'}}>2 months free</span>
                            </>
                        ) : (
                            <p>$9/mo</p> 
                        )}
                    </div>
                </div>

                <div className="option2 option" onClick={() => handleOptionClick('Advanced', 12, 'option2')} >
                    <img src="assets/images/icon-advanced.svg" alt="" />
                    <div className="option-text" >
                        <h4 style={{color: 'hsl(213, 96%, 18%)'}}>Advanced</h4>
                        {isChecked ? (
                            <>
                                <p>$120/mo</p> 
                                <span style={{color: 'hsl(213, 96%, 18%)'}}>2 months free</span>
                            </>
                        ) : (
                            <p>$12/mo</p> 
                        )}
                    </div>
                </div>

                <div className="option3 option" onClick={() => handleOptionClick('Pro', 15, 'option3')}>
                    <img src="assets/images/icon-pro.svg" alt="" />
                    <div className="option-text" >
                        <h4 style={{color: 'hsl(213, 96%, 18%)'}}>Pro</h4>
                        {isChecked ? (
                            <>
                                <p>$150/mo</p> 
                                <span style={{color: 'hsl(213, 96%, 18%)'}}>2 months free</span>
                            </>
                        ) : (
                            <p>$15/mo</p> 
                        )}
                    </div>
                </div>
            </div>

            <div className="option-btn">
                <label htmlFor="toggle-switch" >
                    <span className="monthly">Monthly</span>
                    <label className="switch">
                        <input type="checkbox" onChange={handleToggle} required/>
                        <span className="slider round"></span>
                    </label>
                    <span className="yearly">Yearly</span>
                </label>
            </div>

            <div className="pageBtns">
                <button className='prevBtn' onClick={handlePrevSubmit}>Go Back</button>
                <button type='submit' className='nextBtn' onClick={handleNextSubmit}>Next Step</button>
            </div>
        </div>
    )
}

export default Page2;