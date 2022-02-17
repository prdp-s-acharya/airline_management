import * as types from "./actionTypes";

const baseUrl = "http://localhost:8080/api/";

export function loadFlightsSuccess(flights) {
  return { type: types.LOAD_FLIGHTS_SUCCESS, data: flights };
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

export function loadFlights() {
  const getFlights = () => {
    const data = fetch(`${baseUrl}flights`)
      .then(handleResponse)
      .catch((error) => {
        throw error;
      });
    return data;
  };

  return function (dispatch) {
    return getFlights()
      .then((res) => {
        const [...flights] = res.flights;
        dispatch(loadFlightsSuccess(flights));
      })
      .catch((error) => {
        throw error;
      });
  };
}
