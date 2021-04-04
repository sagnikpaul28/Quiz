import React from "react";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import ChooseQuiz from "./ChooseQuiz";

import image from "../../img/bg.jpg";

class ChooseQuizPageMain extends React.Component {
    render() {
        return (
            <>
                <FullPageImage image={image} alt="Full Width Image" />
                <Layer />
                <ChooseQuiz />
            </>
        )
    }
}

export default ChooseQuizPageMain;