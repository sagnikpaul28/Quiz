import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

import answersReducer from "./reducers/answersReducer";
import questionsReducer from "./reducers/questionsReducer";
import topicsReducer from "./reducers/topicReducer";

const store = createStore(
    combineReducers({ answersReducer, questionsReducer, topicsReducer }),
    {},
    applyMiddleware(logger)
);

export default store;