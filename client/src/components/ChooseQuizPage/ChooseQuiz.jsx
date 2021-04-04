import React from "react";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";

export default function ChooseQuiz(props) {
    let selectedIndex = props.index;
    let topics = props.topics;

    let onClickArrow = (offset) => {
        if ((selectedIndex === 0 && offset === -1) || (selectedIndex === topics.length - 1 && offset === 1)) {
            return;
        }
        props.changeSelectedIndex(selectedIndex + offset);
    }

    return (
        <div className="choose-quiz-container">
            <FullPageImage image={topics[selectedIndex].bgImg} alt={topics[selectedIndex].name} />
            <Layer />
            <div className="container">
                <div className="description">
                    <p>{topics[selectedIndex].name}</p>
                    <p>{topics[selectedIndex].description}</p>
                </div>
                <div className="list-container">
                    <div className={"list selected-" + selectedIndex}>
                        {topics.map((topic, index) => 
                            <div className={"list-item" + (index === selectedIndex ? " selected" : "")} key={index} onClick={() => props.changeSelectedIndex(index)} >
                                <img src={topic.primaryImg} alt={topic.name} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow left-arrow" onClick={() => onClickArrow(-1)}></div>
                    <div className="arrow right-arrow" onClick={() => onClickArrow(1)}></div>
                </div>
                <div className="start">Start</div>
            </div>
        </div>
    )
}