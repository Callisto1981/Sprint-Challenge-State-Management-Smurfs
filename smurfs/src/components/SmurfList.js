import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../action/action";

const SmurfList = smurf => {
  return (
    <div>
      <button onClick={smurf => smurf.getSmurf()}>GET SMURFS</button>
      {smurf.smurf.map(smurf => (
        <div key={smurf.id}>
          <h1>Name: {smurf.name}</h1>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
          <p>ID: {smurf.id}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    fetchSmurf: state.fetchSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
