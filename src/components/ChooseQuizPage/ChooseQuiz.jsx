import React from "react";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";

import image from "../../img/dc.jpg";

import dcIcon from "../../img/dc-card.jpg";
import marvelIcon from "../../img/marvel-card.jpg";
import narutoIcon from "../../img/naruto-card.png";

export default function ChooseQuiz() {
    return (
        <div className="choose-quiz-container">
            <FullPageImage image={image} alt="dc" />
            <Layer />
            <div className="container">
                <div className="description">
                    <p>DC Comics</p>
                    <p>Let us be honest here for a second. How many here are actually true DC fans? No, really. That's a serious question. I know I won't be able to get your answers but I do think it is an important question to ask because this quiz is really only passable by people who are truly DC fans. This covers comics, films, cartoons...it covers all manner of characters, plot lines and more.</p>
                </div>
                <div className="list-container">
                    <div className="list">
                        <div className="list-item selected">
                            <img src={dcIcon} />
                        </div>
                        <div className="list-item">
                            <img src={marvelIcon} />
                        </div>
                        <div className="list-item">
                            <img src={narutoIcon} />    
                        </div>
                        <div className="list-item">
                            <img src={dcIcon} />
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow left-arrow"></div>
                    <div className="arrow right-arrow"></div>
                </div>
                <div className="start">Start</div>
            </div>
        </div>
    )
}