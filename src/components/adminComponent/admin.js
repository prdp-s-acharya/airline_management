import React from "react";
import FlightList from "../FlightList";

function Admin() {
  return (
    <>
      <h1>admin Page</h1>
      <FlightList from="admin" />
    </>
  );
}

export default Admin;
