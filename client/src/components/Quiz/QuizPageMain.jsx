import React from "react";
import axios from "axios";

import { FullPageVideo } from '../common/FullPageVideo';

import video from '../../img/dc.mp4';
import Layer from "../common/Layer";
import QuestionContainer from './QuestionContainer';
import { useState } from "react";
import { useEffect } from "react";

function QuizPageMain(props) {
    let [topic, updateTopic] = useState(null);
    let [currentIndex, updateCurrentIndex] = useState(0);
    let [questions, updateQuestions] = useState([]);
    let [answers, updateAnswers] = useState([]);
    let [selectedAnswer, updateSelectedAnswer] = useState(null);

    useEffect(() => {
        let topic = props.match.params.topic;
        axios.get("http://localhost:8000/questions/" + topic).then(res => {
            updateTopic(topic);
            updateQuestions(res.data);
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

        updateCurrentIndex(currentIndex + 1);
        updateAnswers([...answersArray]);
        updateSelectedAnswer(null);
    }

    let currentQuestion = questions.length > 0 && questions[currentIndex].question;
    let options = questions.length > 0 ? questions[currentIndex].options : [];
    return (
        <>
            <FullPageVideo video={video} />
            <Layer />
            <QuestionContainer question={currentQuestion} options={options} onClickAnswer={(id) => updateSelectedAnswer(id)} 
                selectedAnswer={selectedAnswer} onClickNext={() => onClickNext() } currentIndex={currentIndex} />
        </>
    )
}

export default QuizPageMain;