import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './scss/index.scss';

import QuizPageMain from "./components/Quiz/QuizPageMain";
import SelectTopicPageMain from "./components/SelectTopic/SelectTopicPageMain";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SelectTopicPageMain} />
            <Route exact path="/quiz/:topic" component={QuizPageMain} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
