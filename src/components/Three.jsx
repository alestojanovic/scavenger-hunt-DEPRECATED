import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageThree } from "../Messages";
import logo from "../logo.svg";

export const Three = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_ONE}`);
  };
  return (
    <>
      <div>
        <button className="two-button" onClick={routeChange}>
          <img src={logo} className="App-logo" alt="logo" /> <br />
          {MessageThree.GIFT}
        </button>
      </div>
      <div className="footer">
        <a
          className="footer-link"
          href={MessageThree.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          {MessageThree.GITHUB}
        </a>
      </div>
    </>
  );
};
