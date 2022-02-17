import passangers from "./passangerReducer";
import flights from "./flightReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  passangers,
  flights,
});

export default rootReducer;
