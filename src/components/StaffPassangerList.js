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
    // return passangers.forEach((element) => {
    //   props.savePassanger(element);
    // });
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
      <div key={p.id}>
        <h2>{p.name}</h2>
        <p>{p.age}</p>
        <input
          type="checkbox"
          value={p.checkIn}
          name="chack In"
          onChange={() => {
            boardIn(p.id);
          }}
        />
      </div>
    );
  });

  return <>{displayPassangers}</>;
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
