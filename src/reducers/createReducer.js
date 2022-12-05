const initialStatus = {
    status: "INITIAL"
};


const createReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case "CREATE_BLOG": {
            return {
                ...state,
                status: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default createReducer;