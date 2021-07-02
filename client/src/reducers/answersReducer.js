const answersReducer = (state = {
    answers: [],
    score: 0
}, action) => {
    switch (action.type) {
        case "select-answers": 
            state = {
                ...state,
                answers: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default answersReducer;