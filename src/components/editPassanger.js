import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadPassangers, savePassanger } from "./Redux/Actions/passangerAction";
import EditForm from "./EditForm";

function EditPassanger(props) {
  const passangerId = useParams().passangerId;
  const requiredPassanger = props.passangers.find(
    (p) => p.id === parseInt(passangerId)
  );
  const [editPassanger, setEditPassanger] = useState(requiredPassanger);

  function handleChange(event) {
    const { name, value } = event.target;
    setEditPassanger((prevPassanger) => ({
      ...prevPassanger,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.savePassanger(editPassanger).catch((error) => {
      throw error;
    });
  }
  function handleAddService(event) {
    setEditPassanger((prevPassanger) => ({
      ...prevPassanger,
      ancillaryServices: [
        ...prevPassanger.ancillaryServices,
        event.target.value,
      ],
    }));
  }

  return (
    <>
      <EditForm
        passanger={editPassanger}
        onChange={handleChange}
        onSave={handleSubmit}
        onAddService={handleAddService}
      />
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    passangers: state.passangers,
  };
}

const mapDispatchToProps = {
  loadPassangers,
  savePassanger,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPassanger);
