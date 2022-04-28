import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

export const Two = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_THREE}`);
  };
  return <div>Two</div>;
};
