const initialdata = {
    blog: {},
    status: "PENDING"
};


const fetchOneReducer = (state = initialdata, action) => {
    switch (action.type) {
        case "GET_ONE_BLOG": {
            return {
                ...state,
                blog: action.payload.data,
                status: action.payload.status
            }
        }
        default: {
            return state;
        }
    }
}

export default fetchOneReducer;