import React, { useState } from "react";
import Page4 from "./Page4";

const Page3 = ({ onNext, onPrev, pageData }) => {
    const [addOns, setAddOns] = useState([
        { id: 1,label:'Online service',description: 'Access to multiplayer games',price: 1, isChecked: false, isClicked: false },
        { id: 2,label:'Larger storage',description: 'Extra 1TB of cloud save',price: 2, isChecked: false, isClicked: false },
        { id: 3,label:'Customizable profile',description: 'Custom theme on your profile',price: 2, isChecked: false, isClicked: false },
    ]);

    const [selectedServices, setSelectedServices] = useState([]);

    const handleNextSubmit = (e) => {
        e.preventDefault();
        console.log(selectedServices)
        pageData(selectedServices);
        onNext();
    }

    const handlePrevSubmit = (e) => {
        e.preventDefault();
        onPrev();
    }

    const handleToggle = (id) => {
        setAddOns((prevAddOns) => {
            return prevAddOns.map((addOn) => {
                if (addOn.id === id) {
                    return { ...addOn, isChecked: !addOn.isChecked };
                }
                return addOn;
            });
        });
    };

    const handleClick = (id, service, price, isChecked) => {
        setAddOns((prevAddOns) => {
            return prevAddOns.map((addOn) => {
                if (addOn.id === id) {
                    return {
                        ...addOn,
                        isClicked: !addOn.isClicked,
                        isChecked: !addOn.isChecked,
                    };
                }
                return addOn;
            });
        });

        if(isChecked === false){
            setSelectedServices([...selectedServices,{
                service: service,
                price: price
            }])
        }

        
    };

    return (
        <div className="page3 page">
        <h2>Pick add-ons</h2>
        <p>Add ons help enhance your gaming experience.</p>

        <form action="">
            <div className="add-ons">
            {addOns.map((addOn) => (
                <div
                    key={addOn.id}
                    className={`add-on add-on${addOn.id} ${addOn.isClicked ? 'clicked' : ''}`}
                    onClick={() => handleClick(addOn.id, addOn.label, addOn.price, addOn.isChecked)}
                >
                    <input
                        type="checkbox"
                        checked={addOn.isChecked}
                        onChange={() => handleToggle(addOn.id)}
                    />
                    <div className="addOnText">
                        <h4>{addOn.label}</h4>
                        <p>{addOn.description}</p>
                    </div>
                    <span style={{ color: 'hsl(243, 100%, 62%)' }}>+${addOn.price}/mo</span>
                </div>
            ))}
                <div className="page3Btns">
                    <button className='prevBtn' onClick={handlePrevSubmit}>Go Back</button>
                    <button type='submit' className='nextBtn' onClick={handleNextSubmit}>Next Step</button>
                </div>
            </div>
        </form>

        </div>
    );
};

export default Page3;
