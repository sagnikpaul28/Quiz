import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './scss/index.scss';

import HomePageMain from "./components/HomePage/HomePageMain";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePageMain} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
