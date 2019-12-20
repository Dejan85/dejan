import { combineReducers } from "redux";

import getJsonReducer from "./getJsonReducer";
import togglNavReducer from "./togglNavReducer";

export default combineReducers({
  projects: getJsonReducer,
  togglNav: togglNavReducer
});
