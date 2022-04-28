import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

const MyTimer = ({ expiryTimestamp }) => {
  const navigate = useNavigate();
  const [enable, setEnable] = useState(true);

  const handleEnable = () => {
    setEnable(false);
  };

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_ONE}`);
  };
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Happy Hacking</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{"If you enable this button it will show you the way"}</p>
      {enable ? (
        <button className="three-button" onClick={handleEnable}>
          The Way
        </button>
      ) : (
        <button className="three-button" onClick={routeChange}>
          The Way
        </button>
      )}
    </div>
  );
};

export default MyTimer;
