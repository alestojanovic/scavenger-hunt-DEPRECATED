import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageTwo } from "../Messages";

export const Two = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_THREE}`);
  };
  return (
    <div>
      <h3>{MessageTwo.HINT}</h3>
      <button className="one-button" onClick={routeChange}>
        {" "}
        {MessageTwo.PEP}{" "}
      </button>
    </div>
  );
};
