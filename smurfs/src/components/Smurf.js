import React from "react";
import { context } from "../context/context";

export const Smurf = () => {
  const smurf = context();
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.height}</p>
    </div>
  );
};
