import createReducer from "./createReducer";
import fetchReducer from "./fetchReducer";
import deleteReducer from "./deleteReducer";
import updateReducer from "./updateReducer";
import fetchOneReducer from "./fetchOneReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        createReducer,
        fetchReducer,
        deleteReducer,
        updateReducer,
        fetchOneReducer
    }
);

export default rootReducer;