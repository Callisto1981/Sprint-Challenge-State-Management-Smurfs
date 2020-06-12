import React, { useState } from "react";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const changeHandle = () => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    postSmurf(newSmurf);
  };

  retrun(
    <div>
      <form>
        <label>
          Name:
          <input
            name="name"
            id=""
            type="text"
            onChange={changeHandle}
            value={newSmurf.name}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            id=""
            type="text"
            onChange={changeHandle}
            value={newSmurf.age}
          />
        </label>
        <label>
          Height:
          <input
            name="height"
            id=""
            type="text"
            onChange={changeHandle}
            value={newSmurf.height}
          />
        </label>
      </form>
    </div>
  );
};
