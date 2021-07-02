import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { FullPageVideo } from '../common/FullPageVideo';

import video from '../../img/dc.mp4';
import Layer from "../common/Layer";
import QuestionContainer from './QuestionContainer';

function QuizPageMain(props) {
    const { selectedTopic } = useSelector( state => state.topics );
    const { currentIndex, questions, selectedAnswer } = useSelector( state => state.questions );
    const { answers } = useSelector( state => state.answers );
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/questions/" + selectedTopic).then(res => {
            dispatch({ type: "set-questions", payload: res.data });
        });
    }, [])

    function onClickNext() {
        if (selectedAnswer === null) {
            return;
        }
        
        let questionId = questions[currentIndex].id;
        let answersArray = [...answers];
        answersArray.push({
            id: questionId,
            selected: selectedAnswer
        });

        dispatch({ type: "select-answers", payload: [...answersArray] });
    }

    let currentQuestion = questions.length > 0 && questions[currentIndex].question;
    let options = questions.length > 0 ? questions[currentIndex].options : [];
    return (
        <>
            <FullPageVideo video={video} />
            <Layer />
            <QuestionContainer question={currentQuestion} options={options} onClickAnswer={(id) => dispatch({ type: "change-selected-answer", payload: id })} 
                selectedAnswer={selectedAnswer} onClickNext={() => onClickNext() } currentIndex={currentIndex} />
        </>
    )
}

export default QuizPageMain;