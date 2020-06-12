import React, { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Context } from "./context/context";

import { SmurfForm } from "./components/SmurfForm";

const App = () => {
  const [smurf] = useState(data);
  const [item, setItem] = useState([]);

  const addSmurf = smurf => {
    setItem(smurf);
  };

  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <Context.Provider value={(smurf, addSmurf)}>
        <SmurfForm />
      </Context.Provider>
    </div>
  );
};

export default App;
