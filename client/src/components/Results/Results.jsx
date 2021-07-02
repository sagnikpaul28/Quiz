import React from "react";

function Results(props) {
    return (
        <div className="results-container">
            <div className="score">
                Final Score<span>7/10</span>
            </div>
            <div className="button-container">
                <div className="button try-again">Try Again</div>
                <div className="button change-topic">Choose Another Topic</div>
            </div>
        </div>
    )
}

export default Results;