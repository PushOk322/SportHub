import React, { useState, useEffect } from 'react';
import "./log-sidecontent.scss";

import sideImg1 from "../../../img/log-side-img-1.png";
import sideImg2 from "../../../img/log-side-img-2.png";
import sideImg3 from "../../../img/log-side-img-3.png";
import sideImg4 from "../../../img/log-side-img-4.png";
import sideImg5 from "../../../img/log-side-img-5.png";
import sideImg6 from "../../../img/log-side-img-6.png";
import sideImg7 from "../../../img/log-side-img-7.png";


const LogSideContent = (props) => {

    return (
        <>
            <div className="log-side-content">
                <div className="log-side-content__column">
                    <div className="log-side-content__card">
                        <img src={sideImg1} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title">Kristin Watson</div>
                        <div className="log-side-content__undertitle">Rehabilitation specialist</div>
                    </div>
                    <div className="log-side-content__card">
                        <img src={sideImg2} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title">Kristin Watson</div>
                        <div className="log-side-content__undertitle">Rehabilitation specialist</div>
                    </div>
                    <div className="log-side-content__card">
                        <img src={sideImg3} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title">Devon</div>
                        <div className="log-side-content__undertitle">Fitness trainer</div>
                    </div>
                    <div className="log-side-content__card">
                        <img src={sideImg4} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title">Kristin Watson</div>
                        <div className="log-side-content__undertitle">Rehabilitation specialist</div>
                    </div>
                </div>
                <div className="log-side-content__column small">
                    <div className="log-side-content__card small">
                        <img src={sideImg5} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title small">Courtney Henry</div>
                        <div className="log-side-content__undertitle small">Yoga guru</div>
                    </div>
                    <div className="log-side-content__card small">
                        <img src={sideImg6} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title small">Theresa Webb</div>
                        <div className="log-side-content__undertitle small">Fitness trainer</div>
                    </div>
                    <div className="log-side-content__card small">
                        <img src={sideImg7} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title small">Kristin Watson</div>
                        <div className="log-side-content__undertitle small">Rehabilitation specialist</div>
                    </div>
                    <div className="log-side-content__card small">
                        <img src={sideImg6} alt="" className="log-side-content__img" />
                        <div className="log-side-content__title small">Theresa Webb</div>
                        <div className="log-side-content__undertitle small">Fitness trainer</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogSideContent;
