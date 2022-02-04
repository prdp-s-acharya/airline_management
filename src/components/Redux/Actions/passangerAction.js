import * as types from "./actionTypes";
import { ReadPassanger, WritePassanger } from "../../../data/ReadWriteData";

const baseUrl = "http://localhost:8080/api";

export function updatePassangerSuccess(passanger) {
  return { type: types.UPDATE_PASSANGER_SUCCESS, data: passanger };
}

export function loadPassangerSuccess(passanger) {
  return { type: types.LOAD_PASSANGER_SUCCESS, data: passanger };
}

async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function loadPassangers() {
  const getPassanger = () => {
    const data = fetch(baseUrl)
      .then(handleResponse)
      .catch((error) => {
        throw error;
      });
    return data;
  };

  return function (dispatch) {
    return getPassanger()
      .then((res) => {
        const [...passangers] = res.passangers;
        dispatch(loadPassangerSuccess(passangers));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function savePassanger(passanger) {
  const updatePassanger = (passanger) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passanger),
    };
    const data = fetch(baseUrl, requestOptions)
      .then(handleResponse)
      .catch((error) => {
        throw error;
      });
    console.log(data);
    return data;
  };

  return function (dispatch, getState) {
    return updatePassanger(passanger)
      .then((passanger) => {
        dispatch(updatePassangerSuccess(passanger));
      })
      .catch((error) => {
        throw error;
      });
  };
}
