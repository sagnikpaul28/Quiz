import React from "react";

export default function QuestionContent(props) {
    return(
        <div className="question-container">
            <div className="question-number">{props.currentIndex + 1}</div>
            <div className="question">
                {props.question}
            </div>
            <div className="options">
                {props.options.map((item, index) => (
                    <div className={"option" + (index === props.selectedAnswer ? " selected" : "")} key={index} onClick={() => props.onClickAnswer(index)}>
                        {(String.fromCharCode(65 + index))}. {item.optionName}
                    </div>
                ))}
            </div>
            <div className="submit" onClick={() => props.onClickNext()}>Next</div>
        </div>
    )
}