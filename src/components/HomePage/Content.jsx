import React from "react";

import qustionMark from '../../img/question-mark.png';

export function Content() {
    return (
        <div className="content">
            <img src={qustionMark} alt="Question Mark" className="question-mark" />
            <p className="title">Get Started</p>
        </div>
    )
}