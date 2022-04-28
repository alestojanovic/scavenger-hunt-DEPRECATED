import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import logo from "./logo.svg";

export const Two = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_THREE}`);
  };
  return (
    <div>
      <button className="two-button" onClick={routeChange}>
        <img src={logo} className="App-logo" alt="logo" /> <br />
        Download me and find the gift inside.
      </button>
    </div>
  );
};
