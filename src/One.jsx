import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

export const One = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_TWO}`);
  };
  return (
    <div>
      <button className="one-button" onClick={routeChange}>
        {" "}
        You are almost there{" "}
      </button>
    </div>
  );
};
