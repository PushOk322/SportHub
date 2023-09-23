import React, { useState, useEffect } from 'react';
import "./orange-button.scss";
import plusIcon from '../../../img/plus-icon.svg';
const OrangeButton = (props) => {

    return (
        <button onClick={()=>{props.handleLogin()}} className={props.back ? 'orange-button back' : 'orange-button'} style={{maxWidth:props.maxWidth, width: props.width, marginTop: props.marginTop,marginLeft: props.marginLeft, height:props.height}}>
            {props.plus && (<img src={plusIcon} alt="" className="orange-button__plus" />)}
            
            {props.text}
        </button>
    );
};

export default OrangeButton;
