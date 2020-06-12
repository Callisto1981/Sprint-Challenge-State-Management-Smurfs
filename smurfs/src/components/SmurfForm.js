import React, { useState } from "react";
import { connect } from "react-redux";

import { postSmurf } from "../action/action";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.postSmurf(newSmurf);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            name="name"
            id=""
            type="text"
            onChange={handleChange}
            value={props.name}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            id=""
            type="text"
            onChange={handleChange}
            value={props.age}
          />
        </label>
        <label>
          Height:
          <input
            name="height"
            id=""
            type="text"
            onChange={handleChange}
            value={newSmurf.height}
          />
        </label>
        <button type="submit" onClick={submitForm}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default connect(null, { postSmurf })(SmurfForm);
