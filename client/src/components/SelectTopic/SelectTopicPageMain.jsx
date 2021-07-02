import React, { useState, useEffect } from "react";
import axios from "axios";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import SelectQuiz from "./SelectTopic";

import image from "../../img/bg.jpg";

function SelectQuizPageMain(props) {
    const [topics, updateTopics] = useState([]);
    const [topicIndex, updateTopicIndex] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8000/topics").then(res => {
            updateTopics(res.data);
        });
    }, []);

    function onClickStart() {
        props.history.push("/quiz/" + topics[topicIndex].id);
    }

    return (
        <>
            <FullPageImage image={image} alt="Full Width Image" />
            <Layer />
            {topics.length > 0 
                ? <SelectQuiz 
                    topics={topics} 
                    index={topicIndex} 
                    changeSelectedIndex={ (index) => updateTopicIndex(index) } 
                    onClickStart={ () => onClickStart() } /> 
                : ""}
        </>
    )

}

export default SelectQuizPageMain;