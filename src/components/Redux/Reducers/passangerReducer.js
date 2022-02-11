import * as types from "../Actions/actionTypes";
import initialState from "./initialState";

function passangerReducer(state = initialState.passangers, action) {
  switch (action.type) {
    case types.UPDATE_PASSANGER_SUCCESS:
      return state.map((passanger) =>
        passanger.id === action.data.id ? action.data : passanger
      );
    case types.LOAD_PASSANGER_SUCCESS:
      return [...action.data];
    default:
      return state;
  }
}

export default passangerReducer;
