import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadPassangers } from "../Redux/Actions/passangerAction";

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
  }, [props]);

  const flightId = useParams();

  console.log(passangers);
  const filterdPassangers = passangers.filter(
    (p) => p.flightId === parseInt(flightId.flightId)
  );
  const displayPassangers = filterdPassangers.map((p) => (
    <div className="col-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{p.name}</h2>
          <p className="card-text">{p.age}</p>

          <Link to={`/managePassangers/${p.id}/edit`} params={{ p }}>
            <button className="btn btn-primary">edit</button>
          </Link>
        </div>
      </div>
    </div>
    // <div key={p.id}>
    //   <h2>{p.name}</h2>
    //   <p>{p.age}</p>
    //   <Link to={`/managePassangers/${p.id}/edit`} params={{ p }}>
    //     edit
    //   </Link>
    // </div>
  ));

  return <div className="row">{displayPassangers}</div>;
}

function mapStateToProps(state, ownProps) {
  return {
    passangers: state.passangers,
  };
}

const mapDispatchToProps = {
  loadPassangers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PassangerList);
