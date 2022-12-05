const initialStatus = {
    status: "PENDING"
};


const deleteReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case "DELETE_BLOG": {
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

export default deleteReducer;