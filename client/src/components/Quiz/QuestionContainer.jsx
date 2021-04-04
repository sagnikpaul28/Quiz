import React from "react";

export default function QuestionContent(props) {
    return(
        <div className="question-container">
            <div className="question-number">1</div>
            <div className="question">
                Which superhero was responsible for putting Barbara Gordon in a wheelchair?
            </div>
            <div className="options">
                <div className="option">
                    A. Bane
                </div>
                <div className="option">
                    B. The Joker
                </div>
                <div className="option">
                    C. The Riddler
                </div>
                <div className="option">
                    D. Batman
                </div>
            </div>
            <div className="submit">Next</div>
        </div>
    )
}