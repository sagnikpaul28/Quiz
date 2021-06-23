import React from "react";
import axios from "axios";

import { FullPageVideo } from '../common/FullPageVideo';

import video from '../../img/dc.mp4';
import Layer from "../common/Layer";
import QuestionContainer from './QuestionContainer';

class QuizPageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: null,
            currentIndex: 0,
            questions: [],
            answers: [],
            selectedAnswer: null
        }
    }

    componentDidMount() {
        let topic = this.props.match.params.topic;
        axios.get("http://localhost:8000/questions/" + topic).then(res => {
            this.setState({
                topic,
                questions: res.data
            });
        });
    }

    onClickAnswer(id) {
        this.setState({
            selectedAnswer: id
        })
    }

    onClickNext() {
        if (this.state.selectedAnswer === null) {
            return;
        }
        
        let questionId = this.state.questions[this.state.currentIndex].id;
        let answersArray = [...this.state.answers];
        answersArray.push({
            id: questionId,
            selected: this.state.selectedAnswer
        });

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            answers: [...answersArray],
            selectedAnswer: null
        });

    }

    render() {
        let { currentIndex, questions, selectedAnswer } = this.state;
        let currentQuestion = questions.length > 0 && questions[currentIndex].question;
        let options = questions.length > 0 ? questions[currentIndex].options : [];
        return (
            <>
                <FullPageVideo video={video} />
                <Layer />
                <QuestionContainer question={currentQuestion} options={options} onClickAnswer={(id) => this.onClickAnswer(id)} 
                    selectedAnswer={selectedAnswer} onClickNext={() => this.onClickNext() } currentIndex={currentIndex} />
            </>
        )
    }
}

export default QuizPageMain;