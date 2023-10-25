const initialState = {
    repos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_REPOS":
            return { ...state, repos: action.payload}
        default:
            return state;
    }
}

export default rootReducer;