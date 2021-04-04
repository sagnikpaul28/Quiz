import React from "react";

import { useHistory } from "react-router";
import qustionMark from '../../img/question-mark.png';

export function Content() {
    const history = useHistory();
    const onClickNext = () => {
        history.push({
            pathname:  "/quiz"
        })
    }

    return (
        <div className="content">
            <img src={qustionMark} alt="Question Mark" className="question-mark" />
            <p className="title" onClick={onClickNext} >Get Started</p>
        </div>
    )
}