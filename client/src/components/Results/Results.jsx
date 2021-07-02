import React from "react";

function Results(props) {
    return (
        <div className="results-container">
            <div className="score">
                Final Score<span>{props.score}/10</span>
            </div>
            <div className="button-container">
                <div className="button try-again" onClick={() => props.tryAgain()}>Try Again</div>
                <div className="button change-topic" onClick={() => props.changeTopic()}>Choose Another Topic</div>
            </div>
        </div>
    )
}

export default Results;