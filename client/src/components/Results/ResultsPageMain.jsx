import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import Results from "./Results";

function ResultsPageMain(props) {
    const { selectedTopic } = useSelector(state => state.topics);

    useEffect(() => {
        if (selectedTopic == null) {
            props.history.replace("/");
        }
    });

    return (
        <>
            <FullPageImage image={selectedTopic && selectedTopic.bgImg} alt={selectedTopic && selectedTopic.name} />
            <Layer />
            <Results />
        </>
    )
}

export default ResultsPageMain;