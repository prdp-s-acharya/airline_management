import passangers from "./passangerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  passangers,
});

export default rootReducer;
