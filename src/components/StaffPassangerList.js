import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadPassangers, savePassanger } from "./Redux/Actions/passangerAction";

function PassangerList(props) {
  const [passangers, setPassngers] = useState([...props.passangers]);

  useEffect(() => {
    if (props.passangers.length === 0) {
      props.loadPassangers().catch((error) => {
        alert("loading courses failed" + error);
      });
    } else {
      setPassngers([...props.passangers]);
    }
    //
  }, [props]);

  const flightId = useParams();

  console.log(passangers);
  const filterdPassangers = passangers.filter(
    (p) => p.flightId === parseInt(flightId.flightId)
  );

  const boardIn = (id) => {
    setPassngers((prevPass) => {
      return prevPass.map((pass) => {
        if (pass.id === id) {
          pass.checkIn = !pass.checkIn;
        }
        return pass;
      });
    });
  };

  const displayPassangers = filterdPassangers.map((p) => {
    return (
      <div key={p.id} className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{p.name}</h2>
            <p className="card-text">age :{p.age}</p>
            <p className="card-text">passport no :{p.passport}</p>
            <p className="card-text">seat no :{p.seatNo}</p>
            <p className="card-text">Meal Preference :{p.mealPreference}</p>
            <div>
              <p>services :</p>
              {p.ancillaryServices.map((ser) => (
                <p style={{ padding: "0px 0px 0px 20px" }}>{ser}</p>
              ))}
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                value={p.checkIn}
                name="chackIn"
                onChange={() => {
                  boardIn(p.id);
                }}
              />
              <label className="form-check-label">Check In</label>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{displayPassangers}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(PassangerList);
