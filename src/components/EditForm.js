import React from "react";
import AddService from "./AddServices";

export default function EditForm(props) {
  return (
    <form onSubmit={props.onSave}>
      <h2>Edit passanger</h2>
      <div className="form-group">
        <label>Id</label>
        <input
          className="form-control"
          type="text"
          name="name"
          label="name"
          value={props.passanger.id}
          disabled
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          label="name"
          value={props.passanger.name}
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          className="form-control"
          type="number"
          name="age"
          label="age"
          value={props.passanger.age}
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label>Passport No</label>
        <input
          className="form-control"
          type="number"
          name="passport"
          label="passport"
          value={props.passanger.passport}
          onChange={props.onChange}
        />
      </div>
      {/* <div className="form-group">
        <AddService
          value={props.passanger.acancillaryServices}
          onAddService={props.onAddService}
        />
      </div> */}

      <button type="submit" className="btn btn-primary">
        {" "}
        save
      </button>
    </form>
  );
}
