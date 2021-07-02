import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import Results from "./Results";

function ResultsPageMain(props) {
    const { selectedTopic } = useSelector(state => state.topics);
    const { answers, score } = useSelector(state => state.answers);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedTopic == null) {
            props.history.replace("/");
            return;
        }

        axios.post("http://localhost:8000/answers/validate", {
            topic: selectedTopic.id,
            answers
        }).then(res => {
            dispatch({ type: "set-score", payload: res.data.score })
        });
    }, []);

    function tryAgain() {
        props.history.replace("/quiz/" + selectedTopic.id);
    }

    function changeTopic() {
        props.history.replace("/");
    }

    return (
        <>
            <FullPageImage image={selectedTopic && selectedTopic.bgImg} alt={selectedTopic && selectedTopic.name} />
            <Layer />
            <Results score={score} tryAgain={ () => tryAgain() } changeTopic={ () => changeTopic() }/>
        </>
    )
}

export default ResultsPageMain;