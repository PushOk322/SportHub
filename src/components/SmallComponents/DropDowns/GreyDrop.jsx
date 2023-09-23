import React, { useState } from 'react';
import "./grey-drop.scss";

import questionIcon from '../../../img/questions-icon.svg';
import arrowDown from '../../../img/arrow-down.svg';

const GreyDrop = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        props.setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="grey-drop__container" style={{ maxWidth: props.maxWidth }}>
                <label htmlFor={props.id} className="grey-drop__label">
                    {props.label}
                    {props.question && (
                        <img src={questionIcon} alt="" className="grey-drop__question-icon" />
                    )}
                </label>
                <div className={`grey-drop__custom-dropdown ${isDropdownOpen ? 'grey-drop__custom-dropdown--open' : ''}`}>
                    <div
                        className="grey-drop__custom-dropdown-toggle"
                        onClick={toggleDropdown}
                    >
                        {props.selectedOption || 'Select category'}
                        <img src={arrowDown} alt="" className="grey-drop__arrow" />
                    </div>
                    {isDropdownOpen && (
                        <div className="grey-drop__custom-dropdown-options">
                            {props.options.map((option) => (
                                <div
                                    key={option}
                                    className="grey-drop__custom-dropdown-option"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GreyDrop;
