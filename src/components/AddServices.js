import React from "react";

export default function AddService(props) {
  const [service, setService] = React.useState("");
  const handleChange = (event) => {
    setService(event.target.value);
  };
  const dispalyInput = () => {
    return (
      <>
        {props.value.map((ser) => (
          <p>ser</p>
        ))}
        <input
          type="text"
          name="service"
          value={service}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={props.onAddService}>
          +
        </button>
      </>
    );
  };
  return <>{dispalyInput}</>;
}
