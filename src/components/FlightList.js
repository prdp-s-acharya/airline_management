import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadFlights } from "./Redux/Actions/flightAction";

function FlightList(props) {
  const [flights, setFlights] = useState([...props.flights]);

  useEffect(() => {
    if (props.flights.length === 0) {
      props.loadFlights().catch((error) => {
        alert("loading flights failed" + error);
      });
    } else {
      setFlights([...props.flights]);
    }
  }, [props]);

  const displayFlight = flights.map((flight) => {
    return (
      <tr key={flight.id}>
        <th scope="row">1</th>
        <td> {flight.id}</td>
        <td>{flight.name}</td>
        {props.from === "admin" ? (
          <td>
            <Link to={`${flight.id}/managePassangers/`}>Passangers</Link>
          </td>
        ) : (
          <td>
            <Link to={`${flight.id}/passangers/`}>Passangers</Link>
          </td>
        )}
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

function mapStateToProps(state, ownProps) {
  return {
    flights: state.flights,
  };
}

const mapDispatchToProps = {
  loadFlights,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
