import React from "react";
import axios from "axios";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import ChooseQuiz from "./ChooseQuiz";

import image from "../../img/bg.jpg";

class ChooseQuizPageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            index: 0
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/topics").then(res => {
            this.setState({
                topics: res.data
            })
        });
    }

    changeSelectedIndex(selectedIndex) {
        console.log(selectedIndex);
        this.setState({
            index: selectedIndex
        })
    }

    render() {
        return (
            <>
                <FullPageImage image={image} alt="Full Width Image" />
                <Layer />
                {this.state.topics.length > 0 ? <ChooseQuiz topics={this.state.topics} index={this.state.index} changeSelectedIndex={(index) => this.changeSelectedIndex(index)} /> : ""}
            </>
        )
    }
}

export default ChooseQuizPageMain;