import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

function FlightReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_FLIGHTS_SUCCESS:
      return [...action.data];
    default:
      return state;
  }
}

export default FlightReducer;
