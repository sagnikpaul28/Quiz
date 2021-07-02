const topicsReducer = (state = {
    topics: [],
    topicIndex: 0,
    selectedTopic: null,
}, action) => {
    switch (action.type) {
        case "update-topic": 
            state = {
                ...state, 
                topics: action.payload,
                topicIndex: 0,
                selectedTopic: null
            };
            break;
        case "update-topic-index": 
            state = {
                ...state,
                topicIndex: action.payload
            };
            break;
        case "update-selected-topic":
            state = {
                ...state,
                selectedTopic: action.payload
            };
            break
        default: 
            break;
    }
    return state;
};

export default topicsReducer;