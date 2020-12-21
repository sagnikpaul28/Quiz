import React from "react";

import { FullPageVideo } from '../common/FullPageVideo';

import video from '../../img/dc.mp4';
import { Layer } from "../common/Layer";
import QuestionContainer from './QuestionContainer';

class QuizPageMain extends React.Component {
    render() {
        return (
            <>
                <FullPageVideo video={video} />
                <Layer />
                <QuestionContainer />
            </>
        )
    }
}

export default QuizPageMain;