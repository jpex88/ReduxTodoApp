import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

//binder samman alla de olika reducerna som finns till store
export default combineReducers({ todos, visibilityFilter });
