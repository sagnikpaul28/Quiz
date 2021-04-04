import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './scss/index.scss';

import HomePageMain from "./components/HomePage/HomePageMain";
import QuizPageMain from "./components/Quiz/QuizPageMain";
import ChooseQuizPageMain from "./components/ChooseQuizPage/ChooseQuizPageMain";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePageMain} />
            <Route exact path="/quiz/" component={ChooseQuizPageMain} />
            <Route exact path="/quiz/:quiz" component={QuizPageMain} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
