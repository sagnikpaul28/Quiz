import React from "react";
import axios from "axios";

import FullPageImage from "../common/FullWidthImage";
import Layer from "../common/Layer";
import SelectQuiz from "./SelectTopic";

import image from "../../img/bg.jpg";

class SelectQuizPageMain extends React.Component {
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
        this.setState({
            index: selectedIndex
        })
    }

    onClickStart() {
        console.log( this.state.topics[this.state.index]);
        this.props.history.push("/quiz/" + this.state.topics[this.state.index].id);
    }

    render() {
        return (
            <>
                <FullPageImage image={image} alt="Full Width Image" />
                <Layer />
                {this.state.topics.length > 0 
                    ? <SelectQuiz 
                        topics={this.state.topics} 
                        index={this.state.index} 
                        changeSelectedIndex={ (index) => this.changeSelectedIndex(index) } 
                        onClickStart={ () => this.onClickStart() } /> 
                    : ""}
            </>
        )
    }
}

export default SelectQuizPageMain;