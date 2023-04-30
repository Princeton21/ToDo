import { combineReducers } from "redux";
// import  mobileReducer  from "./mobileReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    taskReducer,
});

export default rootReducer;