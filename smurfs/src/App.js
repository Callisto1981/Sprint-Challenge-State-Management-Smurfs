import React from "react";
import "./App.css";

import SmurfForm from "./components/SmurfForm";
import SmurfList from "./components/SmurfList";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
