const initialdata = {
    blogs: [],
    status: "PENDING"
};


const fetchReducer = (state = initialdata, action) => {
    switch (action.type) {
        case "GET_BLOG": {
            return {
                ...state,
                blogs: action.payload.data,
                status: action.payload.status
            }
        }
        default: {
            return state;
        }
    }
}

export default fetchReducer;