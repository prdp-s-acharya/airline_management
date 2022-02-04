import React from "react";
import { flights } from "../data/flight";
import { Link } from "react-router-dom";

function FlightList() {
  const [avlFlights, setAvlFlights] = React.useState(flights);

  const displayFlight = avlFlights.map((flight) => {
    return (
      <div key={flight.id}>
        <Link to={`/staff/${flight.id}/passangers`}>
          <h4>{flight.name}</h4>
        </Link>
      </div>
    );
  });
  return <>{displayFlight}</>;
}

export default FlightList;
