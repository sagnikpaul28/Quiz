const questionsReducer = (state = {
    currentIndex: 0,
    questions: [],
    selectedAnswer: null
}, action) => {
    switch (action.type) {
        case "set-questions": 
            state = {
                ...state,
                questions: action.payload
            };
            break;
        case "select-answers": 
            state = {
                ...state,
                currentIndex: state.currentIndex + 1,
                selectedAnswer: null
            };
            break;
        case "change-selected-answer":
            state = {
                ...state,
                selectedAnswer: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default questionsReducer;