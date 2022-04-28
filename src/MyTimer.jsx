import React from "react";
import { useTimer } from "react-timer-hook";

const MyTimer = ({ expiryTimestamp }) => {
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
      <button disabled>The Way</button>
    </div>
  );
};

export default MyTimer;
