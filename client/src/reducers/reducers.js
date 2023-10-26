const initialState = {
    repos: [],
    filter: ""
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_REPOS":
            return { ...state, repos: action.payload}
        case "SET_FILTER":
            return {...state, filter: action.payload}
        default:
            return state;
    }
}

export default rootReducer;