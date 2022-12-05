const initialStatus = {
    status: "INITIAL"
};


const updateReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case "UPDATE_BLOG": {
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

export default updateReducer;