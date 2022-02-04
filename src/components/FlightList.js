import React from "react";
import { flights } from "../data/flight";
import { Link } from "react-router-dom";

function FlightList() {
  const [avlFlights, setAvlFlights] = React.useState(flights);

  const displayFlight = avlFlights.map((flight) => {
    return (
      <tr key={flight.id}>
        <th scope="row">1</th>
        <td> {flight.id}</td>
        <td>{flight.name}</td>
        <td>
          <Link to={`/managePassangers/${flight.id}`}>Passangers</Link>
        </td>
      </tr>
    );
  });
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>{displayFlight}</tbody>
      </table>
    </>
  );
}

export { FlightList };
