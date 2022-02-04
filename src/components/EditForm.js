import React from "react";

export default function EditForm(props) {
  return (
    <form onSubmit={props.onSave}>
      <h2>Edit passanger</h2>
      <input
        type="text"
        name="name"
        label="name"
        value={props.passanger.name}
        onChange={props.onChange}
      />

      <input
        type="number"
        name="age"
        label="age"
        value={props.passanger.age}
        onChange={props.onChange}
      />

      <button type="submit" className="btn btn-primary">
        {" "}
        save
      </button>
    </form>
  );
}
