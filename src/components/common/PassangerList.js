import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadPassangers } from "../Redux/Actions/passangerAction";

const filterItems = [
  { name: "All", checked: true },
  { name: "senior", checked: false },
  { name: "infant", checked: false },
  { name: "wheelChair", checked: false },
];

function PassangerList(props) {
  const [passangers, setPassngers] = useState([...props.passangers]);
  const [filterTypes, setFilterTypes] = useState(filterItems);

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

  console.log(props.from);
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

  const updateCheckStatus = (index) => {
    setFilterTypes(
      filterTypes.map((filterType, currentIndex) => {
        return currentIndex === index
          ? { ...filterType, checked: !filterType.checked }
          : filterType;
      })
    );
  };

  const applyFilter = () => {
    var filterdpassangerArray = [];
    filterTypes.forEach((filterType) => {
      if (filterType.name === "All" && filterType.checked) {
        filterdpassangerArray = [...props.passangers];
      }
      if (!filterTypes[0].checked && filterType.checked) {
        filterdpassangerArray = [
          ...filterdpassangerArray,
          ...props.passangers.filter((pass) => pass.type === filterType.name),
        ];
      }
    });
    setPassngers(filterdpassangerArray);
  };

  const displayPassangers = filterdPassangers.map((p) => (
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
            {p.ancillaryServices ??
              p.ancillaryServices.map((ser) => (
                <p style={{ padding: "0px 0px 0px 20px" }}>{ser}</p>
              ))}
          </div>
          {props.from === "admin" ? (
            <Link to={`${p.id}/edit`} params={{ p }}>
              <button className="btn btn-primary">edit</button>
            </Link>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  ));

  const Checkbox = ({ isChecked, label, checkHandler, index }) => (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );

  return (
    <div className="row">
      <div className="col-sm-2">
        <h4>Filter</h4>
        <div>
          {filterTypes.map((filterType, index) => (
            <Checkbox
              key={filterType.name}
              isChecked={filterType.checked}
              checkHandler={() => updateCheckStatus(index)}
              label={filterType.name}
              index={index}
            />
          ))}
          <button className="btn btn-primary" onClick={applyFilter}>
            Apply
          </button>
        </div>
      </div>
      <div className="col-sm-10">
        <div className="row">{displayPassangers}</div>
      </div>
    </div>
  );
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
