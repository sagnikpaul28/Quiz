import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import SelectQuiz from "./SelectTopic";

import image from "../../img/bg.jpg";

function SelectQuizPageMain(props) {
    const { topics, topicIndex } = useSelector((state) => state.topics);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/topics").then(res => {
            dispatch({ type: "update-topic", payload: res.data });
        });
    }, []);

    function onClickStart() {
        let selectedTopic = topics[topicIndex];
        dispatch({ type: "update-selected-topic", payload: selectedTopic})
        props.history.push("/quiz/" + selectedTopic.id);
    }

    return (
        <>
            <FullPageImage image={image} alt="Full Width Image" />
            <Layer />
            {topics.length > 0 
                ? <SelectQuiz 
                    topics={topics} 
                    index={topicIndex} 
                    changeSelectedIndex={ (index) => dispatch({ type: "update-topic-index", payload: index }) } 
                    onClickStart={ () => onClickStart() } /> 
                : ""}
        </>
    )

}

export default SelectQuizPageMain;